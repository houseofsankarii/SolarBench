        const benchData = {
            "1123": {
                location: "Bangalore",
                producedEnergy: "12.45",
                consumedEnergy: "11.32",
                usbCharges: "2001",
                wirelessCharges: "312",
                wifiUsers: "2890",
                solarPower: "62.34 kW",
                batteryVoltage: "13.87 V",
                chargingCount: "110",
                dataUsage: "D: 310.22 Gb<br>U: 18.44 Gb",
                temperature: "22°"
            },
            "1124": {
                location: "Mumbai",
                producedEnergy: "9.81",
                consumedEnergy: "8.67",
                usbCharges: "1674",
                wirelessCharges: "221",
                wifiUsers: "1985",
                solarPower: "58.76 kW",
                batteryVoltage: "14.02 V",
                chargingCount: "95",
                dataUsage: "D: 275.33 Gb<br>U: 16.78 Gb",
                temperature: "24°"
            },
            "1125": {
                location: "Delhi",
                producedEnergy: "10.71",
                consumedEnergy: "10.41",
                usbCharges: "2345",
                wirelessCharges: "284",
                wifiUsers: "3472",
                solarPower: "66.78 kW",
                batteryVoltage: "14.38 V",
                chargingCount: "123",
                dataUsage: "D: 345.99 Gb<br>U: 20.84 Gb",
                temperature: "21°"
            },
            "1126": {
                location: "Hyderabad",
                producedEnergy: "11.63",
                consumedEnergy: "10.95",
                usbCharges: "2156",
                wirelessCharges: "256",
                wifiUsers: "3122",
                solarPower: "64.21 kW",
                batteryVoltage: "14.25 V",
                chargingCount: "118",
                dataUsage: "D: 330.10 Gb<br>U: 19.99 Gb",
                temperature: "23°"
            },
            "1127": {
                location: "Chennai",
                producedEnergy: "11.01",
                consumedEnergy: "10.25",
                usbCharges: "1902",
                wirelessCharges: "198",
                wifiUsers: "2700",
                solarPower: "60.45 kW",
                batteryVoltage: "13.65 V",
                chargingCount: "108",
                dataUsage: "D: 299.01 Gb<br>U: 18.21 Gb",
                temperature: "26°"
            },
            "1128": {
                location: "Pune",
                producedEnergy: "10.55",
                consumedEnergy: "9.90",
                usbCharges: "1855",
                wirelessCharges: "244",
                wifiUsers: "2560",
                solarPower: "59.67 kW",
                batteryVoltage: "14.10 V",
                chargingCount: "105",
                dataUsage: "D: 288.45 Gb<br>U: 17.32 Gb",
                temperature: "25°"
            },
            "1129": {
                location: "Kolkata",
                producedEnergy: "12.10",
                consumedEnergy: "11.20",
                usbCharges: "2103",
                wirelessCharges: "301",
                wifiUsers: "2987",
                solarPower: "63.88 kW",
                batteryVoltage: "14.50 V",
                chargingCount: "117",
                dataUsage: "D: 320.78 Gb<br>U: 19.40 Gb",
                temperature: "24°"
            },
            "1130": {
                location: "Ahmedabad",
                producedEnergy: "9.99",
                consumedEnergy: "9.01",
                usbCharges: "1730",
                wirelessCharges: "198",
                wifiUsers: "2450",
                solarPower: "57.12 kW",
                batteryVoltage: "13.95 V",
                chargingCount: "94",
                dataUsage: "D: 270.10 Gb<br>U: 15.60 Gb",
                temperature: "27°"
            },
            "1131": {
                location: "Jaipur",
                producedEnergy: "10.85",
                consumedEnergy: "10.05",
                usbCharges: "1867",
                wirelessCharges: "221",
                wifiUsers: "2633",
                solarPower: "60.03 kW",
                batteryVoltage: "14.08 V",
                chargingCount: "102",
                dataUsage: "D: 280.88 Gb<br>U: 16.72 Gb",
                temperature: "25°"
            },
            "1132": {
                location: "Lucknow",
                producedEnergy: "11.50",
                consumedEnergy: "10.77",
                usbCharges: "1950",
                wirelessCharges: "239",
                wifiUsers: "2754",
                solarPower: "61.78 kW",
                batteryVoltage: "14.12 V",
                chargingCount: "106",
                dataUsage: "D: 293.44 Gb<br>U: 17.88 Gb",
                temperature: "26°"
            },
            "1134": {
                location: "Bhopal",
                producedEnergy: "10.25",
                consumedEnergy: "9.63",
                usbCharges: "1803",
                wirelessCharges: "204",
                wifiUsers: "2601",
                solarPower: "58.90 kW",
                batteryVoltage: "13.91 V",
                chargingCount: "97",
                dataUsage: "D: 278.33 Gb<br>U: 16.12 Gb",
                temperature: "26°"
            }
        };

        document.querySelectorAll(".sidebar li").forEach(bench => {
            bench.addEventListener("click", function() {
                const id = this.getAttribute("data-bench-id");

                document.querySelectorAll(".sidebar li").forEach(el => el.classList.remove("active"));
                this.classList.add("active");

                const data = benchData[id];
                if (!data) return;

                document.getElementById("producedEnergy").textContent = data.producedEnergy;
                document.getElementById("consumedEnergy").textContent = data.consumedEnergy;
                document.getElementById("usbCharges").textContent = data.usbCharges;
                document.getElementById("wirelessCharges").textContent = data.wirelessCharges;
                document.getElementById("wifiUsers").textContent = data.wifiUsers;

                document.getElementById("solarPower").textContent = data.solarPower;
                document.getElementById("batteryVoltage").textContent = data.batteryVoltage;
                document.getElementById("chargingCount").textContent = data.chargingCount;
                document.getElementById("usbCharges2").textContent = data.usbCharges;
                document.getElementById("wirelessCharges2").textContent = data.wirelessCharges;
                document.getElementById("wifiUsers2").textContent = data.wifiUsers;

                document.getElementById("solarPowerValue").textContent = data.solarPower;
                document.getElementById("batteryVoltageValue").textContent = data.batteryVoltage;
                document.getElementById("chargingCountValue").textContent = data.chargingCount;
                document.getElementById("wifiUsersValue").textContent = data.wifiUsers;
                document.getElementById("dataUsageValue").innerHTML = data.dataUsage;
                document.getElementById("temperatureValue").textContent = data.temperature;

                document.querySelector(".dashboard-header p").innerHTML =
                    `Location: ${data.location} | Status: <span style="color: lime;">●</span> Online | Temp: ${data.temperature} | Humidity: 70% | Air Quality: 99`;
            });
        });


        const imageModal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");
        const modalTitle = document.getElementById("modalTitle");
        const modalDetails = document.getElementById("modalDetails");

        document.querySelectorAll('.image-gallery img').forEach((img, index) => {
            img.addEventListener('click', () => {
                const benchId = 1123 + index;
                modalImage.src = img.src;
                modalTitle.textContent = `Bench ID: ${benchId}`;
                modalDetails.textContent = `Location: Sample Location\nEnergy Produced: 10.7 kWh\nWi-Fi Users: 345`;
                imageModal.style.display = "flex";
            });
        });

        function closeModal() {
            imageModal.style.display = "none";
        }

        window.addEventListener('click', (e) => {
            if (e.target === imageModal) closeModal();
        });


        const exportBtn = document.getElementById('exportBtn');
        const exportOptions = document.getElementById('exportOptions');

        exportBtn.addEventListener('click', () => {
            exportOptions.style.display = exportOptions.style.display === 'block' ? 'none' : 'block';
        });

        window.addEventListener('click', (e) => {
            if (!exportBtn.contains(e.target) && !exportOptions.contains(e.target)) {
                exportOptions.style.display = 'none';
            }
        });

function exportToPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.text("Smart Solar Bench Report", 10, 10);
      doc.text("Solar Generated: 12.4 kWh", 10, 20);
      doc.text("CO₂ Saved: 248.5 kg", 10, 30);
      doc.save("solar_bench_report.pdf");
    }

    function exportToExcel() {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([
        ["Metric", "Value"],
        ["Solar Generated", "12.4 kWh"],
        ["Battery", "82%"],
        ["Wi-Fi Users", "347"],
        ["CO₂ Saved", "248.5 kg"]
      ]);
      XLSX.utils.book_append_sheet(wb, ws, "Dashboard Data");
      XLSX.writeFile(wb, "solar_bench_data.xlsx");
    }


        const displaySpan = document.getElementById('selectPeriod');

        const fp = flatpickr(displaySpan, {
            mode: "range",
            enableTime: false, // Disable time selection
            dateFormat: "Y-m-d", // Set the desired date format
            clickOpens: true,
            onClose: function(selectedDates) {
                if (selectedDates.length === 2) {
                    const startDate = selectedDates[0].toLocaleDateString();
                    const endDate = selectedDates[1].toLocaleDateString();
                    displaySpan.textContent = `📅 ${startDate} - ${endDate}`;
                    displaySpan.classList.add('has-selection');
                } else if (selectedDates.length === 1) {
                    const selectedDate = selectedDates[0].toLocaleDateString();
                    displaySpan.textContent = `📅 ${selectedDate}`;
                    displaySpan.classList.add('has-selection');
                } else {
                    displaySpan.textContent = "📅 Select Period";
                    displaySpan.classList.remove('has-selection');
                }
            }
        });