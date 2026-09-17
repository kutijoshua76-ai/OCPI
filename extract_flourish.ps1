Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\admin\.gemini\antigravity-ide\brain\d95a1e1f-de15-472e-9c30-e30fdd497fd4\.user_uploaded\media_1789672603703.png"
$outputPath = "c:\Users\admin\Downloads\OCPI\OCPI-main\src\assets\flourish-brush.png"

$srcBmp = New-Object System.Drawing.Bitmap($inputPath)

# Flourish line boundaries:
# Left starts at X = 0, Y ~ 310
# Crest at X ~ 380, Y ~ 240
# Tail on right goes to X ~ 920, Y ~ 300
$minX = 0
$maxX = 920
$minY = 240
$maxY = 380

$cropW = $maxX - $minX
$cropH = $maxY - $minY

$outBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $sx = $minX + $x
        $sy = $minY + $y
        
        # Exclude top right quadrant where drum photo was (sx > 650 and sy < 280)
        if ($sx -gt 650 -and $sy -lt 280) {
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            continue
        }

        if ($sx -lt $srcBmp.Width -and $sy -lt $srcBmp.Height) {
            $p = $srcBmp.GetPixel($sx, $sy)
            
            $diffB = 255 - $p.B
            $colorDiff = $p.R - $p.B
            
            # Gold/amber indicator: Blue channel is significantly lower than Red/Green
            if ($colorDiff -gt 15 -and $p.R -gt 180 -and $p.G -gt 120) {
                # This is flourish paint pixel (including faint brush bristles)
                $alpha = [Math]::Min(255, [int]($diffB * 1.5))
                $r = [Math]::Min(255, [int]($p.R * 1.02))
                $g = [Math]::Max(0, [int]($p.G * 0.95))
                $b = [Math]::Max(0, [int]($p.B * 0.6))
                
                $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
            } else {
                $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            }
        }
    }
}

$outBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Flawless flourish-brush.png generated!"
