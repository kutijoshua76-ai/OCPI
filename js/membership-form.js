// Membership Form Wizard - Dual Track (Family vs Tech/Consulting Group)

const MembershipWizard = {
  activeTrack: "family", // 'family' or 'tech'
  activeSubtype: "partner",

  subtypes: {
    family: [
      { id: "partner", label: "Strategic Partner", desc: "Collaborate as an institution, donor, or strategic ally." },
      { id: "career", label: "Professional Career", desc: "Apply for open executive, research, or program staff roles." },
      { id: "internship", label: "Academic Internship", desc: "Structured fellowship and internship for students & graduates." },
      { id: "visit", label: "Visit Us", desc: "Schedule a field delegation or open lab visit." }
    ],
    tech: [
      { id: "ambassador", label: "Ambassador", desc: "Represent OCPI values in your campus, state, or region." },
      { id: "technician", label: "Studio Technician", desc: "Audio/visual, lab hardware, open maker space engineering." },
      { id: "volunteer", label: "Community Volunteer", desc: "Ground support for workshops, relief missions, and community surveys." }
    ]
  },

  init() {
    this.modal = document.getElementById("membershipModal");
    this.closeBtn = document.getElementById("closeMembershipModal");
    this.trackFamilyBtn = document.getElementById("trackFamilyBtn");
    this.trackTechBtn = document.getElementById("trackTechBtn");
    this.subtypeSelect = document.getElementById("formSubtype");
    this.form = document.getElementById("membershipForm");

    this.bindEvents();
    this.updateSubtypeOptions();
  },

  bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.close());
    }

    if (this.modal) {
      this.modal.addEventListener("click", (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    if (this.trackFamilyBtn) {
      this.trackFamilyBtn.addEventListener("click", () => this.setTrack("family"));
    }

    if (this.trackTechBtn) {
      this.trackTechBtn.addEventListener("click", () => this.setTrack("tech"));
    }

    if (this.form) {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    }

    // Connect open buttons across the DOM
    document.querySelectorAll("[data-open-membership]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const preferredTrack = btn.getAttribute("data-track") || "family";
        const preferredSubtype = btn.getAttribute("data-subtype");
        this.open(preferredTrack, preferredSubtype);
      });
    });
  },

  setTrack(track) {
    this.activeTrack = track;
    if (track === "family") {
      this.trackFamilyBtn.classList.add("active", "family");
      this.trackTechBtn.classList.remove("active", "tech");
    } else {
      this.trackTechBtn.classList.add("active", "tech");
      this.trackFamilyBtn.classList.remove("active", "family");
    }
    this.updateSubtypeOptions();
  },

  updateSubtypeOptions() {
    if (!this.subtypeSelect) return;
    const options = this.subtypes[this.activeTrack];
    this.subtypeSelect.innerHTML = options
      .map((opt) => `<option value="${opt.id}">${opt.label} - ${opt.desc}</option>`)
      .join("");
  },

  open(track = "family", subtype = null) {
    this.setTrack(track);
    if (subtype && this.subtypeSelect) {
      this.subtypeSelect.value = subtype;
    }
    if (this.modal) {
      this.modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  },

  close() {
    if (this.modal) {
      this.modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  },

  handleSubmit() {
    const submitBtn = this.form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Processing Application...";

    setTimeout(() => {
      alert("Application received! The OCPI Registry and Project Director Desk will review your application and contact you via email within 3 business days.");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      this.form.reset();
      this.close();
    }, 1200);
  }
};
