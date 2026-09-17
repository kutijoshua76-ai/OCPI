// Main Application Script for OCPI Interactive Platform

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = {
  currentView: "welcome",

  init() {
    this.bindNavigation();
    this.bindHeaderScroll();
    this.renderGovernanceStats();
    this.renderBoardMembers("all");
    this.renderSubcommittees();
    this.renderResearchUnits();
    this.renderStaffTable();
    this.renderEvents();
    this.renderPublications();
    this.bindBoardFilters();
    this.bindDonationModal();

    // Initialize Membership Wizard
    if (window.MembershipWizard) {
      MembershipWizard.init();
    }
  },

  bindNavigation() {
    // Top tab scroller buttons
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.getAttribute("data-view");
        this.switchView(view);
      });
    });

    // Mega-menu and internal jump links with data-view-target
    document.querySelectorAll("[data-view-target]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetView = link.getAttribute("data-view-target");
        const filter = link.getAttribute("data-filter");
        this.switchView(targetView);

        if (filter && targetView === "governance") {
          this.setActiveBoardFilter(filter);
          this.renderBoardMembers(filter);
        }

        // Scroll smoothly to top of main view
        const viewElement = document.getElementById(`view-${targetView}`);
        if (viewElement) {
          viewElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById("mobileToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener("click", () => {
        mobileDrawer.classList.toggle("active");
      });
    }
  },

  switchView(viewId) {
    this.currentView = viewId;

    // Update Tab Buttons
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      if (btn.getAttribute("data-view") === viewId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update Section Visibility
    document.querySelectorAll(".view-section").forEach((sec) => {
      if (sec.id === `view-${viewId}`) {
        sec.classList.add("active");
      } else {
        sec.classList.remove("active");
      }
    });
  },

  bindHeaderScroll() {
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  },

  // GOVERNANCE SECTION
  renderGovernanceStats() {
    const container = document.getElementById("govStatCards");
    if (!container) return;
    const c = OCPI_DATA.governance.counts;
    container.innerHTML = `
      <div class="gov-stat-card">
        <div class="num">${c.totalBoard}</div>
        <div class="desc">Board of Directors & Council</div>
      </div>
      <div class="gov-stat-card">
        <div class="num">${c.executive}</div>
        <div class="desc">Executive Board Leads</div>
      </div>
      <div class="gov-stat-card">
        <div class="num">${c.nonExecutive}</div>
        <div class="desc">Non-Executive Advisors</div>
      </div>
      <div class="gov-stat-card">
        <div class="num">${c.trustees}</div>
        <div class="desc">Trustees & Specialists</div>
      </div>
    `;
  },

  bindBoardFilters() {
    const chips = document.querySelectorAll(".filter-chip[data-board-filter]");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        const filter = chip.getAttribute("data-board-filter");
        this.renderBoardMembers(filter);
      });
    });
  },

  setActiveBoardFilter(filter) {
    document.querySelectorAll(".filter-chip[data-board-filter]").forEach((c) => {
      if (c.getAttribute("data-board-filter") === filter) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
  },

  renderBoardMembers(filter = "all") {
    const container = document.getElementById("boardGrid");
    if (!container) return;

    let list = OCPI_DATA.governance.members;
    if (filter !== "all") {
      list = list.filter((m) => m.category === filter);
    }

    container.innerHTML = list
      .map((m) => {
        let badgeClass = "badge-blue";
        let badgeLabel = "Executive";
        if (m.category === "non-executive") {
          badgeClass = "badge-amber";
          badgeLabel = "Non-Executive";
        } else if (m.category === "trustee") {
          badgeClass = "badge";
          badgeLabel = "Trustee";
        }

        return `
        <div class="member-card">
          <div class="member-img-wrap">
            <img src="${m.image}" alt="${m.name}" loading="lazy" />
            <span class="member-badge badge ${badgeClass}">${badgeLabel}</span>
          </div>
          <div class="member-body">
            <h4 class="member-name">${m.name}</h4>
            <div class="member-role">${m.role}</div>
            <p class="member-bio">${m.bio}</p>
          </div>
        </div>
      `;
      })
      .join("");
  },

  renderSubcommittees() {
    const container = document.getElementById("subcommitteesGrid");
    if (!container) return;

    container.innerHTML = OCPI_DATA.governance.subCommittees
      .map(
        (sc) => `
      <div class="subcommittee-item">
        <h4>${sc.name}</h4>
        <p>${sc.desc}</p>
        <div class="subcommittee-lead">Chair: ${sc.lead}</div>
      </div>
    `
      )
      .join("");
  },

  // RESEARCH SECTION (JRG)
  renderResearchUnits() {
    const container = document.getElementById("researchUnitsGrid");
    if (!container) return;

    container.innerHTML = OCPI_DATA.researchUnits
      .map(
        (unit) => `
      <div class="jrg-unit-card">
        <div class="unit-head">
          <div class="unit-icon">🔬</div>
          <span class="badge badge-blue">${unit.publicationsCount} Papers</span>
        </div>
        <h4 class="unit-title">${unit.name}</h4>
        <p class="unit-focus">${unit.focus}</p>
        <div class="unit-meta">
          <span>Head: <span class="lead">${unit.lead}</span></span>
          <a href="#" class="btn-sm btn-outline" style="padding: 4px 10px; font-size: 0.76rem;" onclick="alert('Viewing publications catalog for ${unit.name}'); return false;">Browse Unit</a>
        </div>
      </div>
    `
      )
      .join("");
  },

  renderStaffTable() {
    const tbody = document.getElementById("academicStaffBody");
    if (!tbody) return;

    tbody.innerHTML = OCPI_DATA.academicStaff
      .map(
        (staff) => `
      <tr>
        <td class="name-col">${staff.name}</td>
        <td>${staff.title}</td>
        <td><span class="campus-tag">${staff.campus}</span></td>
        <td>${staff.unit}</td>
      </tr>
    `
      )
      .join("");
  },

  // EVENTS SECTION
  renderEvents() {
    const container = document.getElementById("eventsCardsGrid");
    if (!container) return;

    container.innerHTML = OCPI_DATA.upcomingEvents
      .map(
        (ev) => `
      <div class="event-card">
        <div>
          <div class="event-header">
            <span class="badge badge-amber">${ev.category}</span>
            <span class="event-date-badge">${ev.date}</span>
          </div>
          <h4 class="event-title">${ev.title}</h4>
          <div class="event-location">📍 ${ev.location}</div>
          <p class="event-desc">${ev.desc}</p>
        </div>
        <div style="margin-top: 20px; display: flex; gap: 10px;">
          <button class="btn btn-sm btn-primary" onclick="alert('Registration confirmed for ${ev.title}');">Register Seat</button>
          <button class="btn btn-sm btn-outline" onclick="alert('Adding ${ev.title} to your calendar (.ICS)...');">Add to iCal</button>
        </div>
      </div>
    `
      )
      .join("");
  },

  // PUBLICATIONS
  renderPublications() {
    const container = document.getElementById("pubCardsGrid");
    if (!container) return;

    container.innerHTML = OCPI_DATA.publications
      .map(
        (p) => `
      <div class="pub-card">
        <div>
          <div class="pub-type">${p.type} • ${p.pages}</div>
          <h4 class="pub-title">${p.title}</h4>
          <div class="pub-meta">Published ${p.date}</div>
          <p style="color: var(--color-text-muted); font-size: 0.88rem; line-height: 1.55; margin-bottom: 20px;">${p.desc}</p>
        </div>
        <button class="btn btn-sm btn-outline" onclick="alert('Downloading ${p.title} (PDF)...');">Download PDF Brief</button>
      </div>
    `
      )
      .join("");
  },

  // DONATION MODAL
  bindDonationModal() {
    const donateModal = document.getElementById("donationModal");
    const closeBtn = document.getElementById("closeDonationModal");

    document.querySelectorAll("[data-open-donate]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (donateModal) {
          donateModal.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });
    });

    if (closeBtn && donateModal) {
      closeBtn.addEventListener("click", () => {
        donateModal.classList.remove("active");
        document.body.style.overflow = "auto";
      });
      donateModal.addEventListener("click", (e) => {
        if (e.target === donateModal) {
          donateModal.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      });
    }

    const donateForm = document.getElementById("donateForm");
    if (donateForm) {
      donateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your generous pledge to One Community Platform Initiative! You are being redirected to our secure NGO payment gateway.");
        donateModal.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    }
  }
};
