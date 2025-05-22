        // Solar Gauge (Doughnut Chart)
        new Chart(document.getElementById("solarGauge"), {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [67, 33],
                    backgroundColor: ["#ffffff", "#444"],
                    borderWidth: 0,
                }],
            },
            options: {
                cutout: '80%',
                rotation: -90,
                circumference: 180,
                plugins: {
                    tooltip: {
                        enabled: false
                    },
                    legend: {
                        display: false
                    },
                }
            }
        });

        // Battery Voltage Line Chart
        new Chart(document.getElementById("batteryChart"), {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Voltage (V)",
                    data: [13.9, 14.1, 14.4, 14.2, 14.5, 14.3],
                    fill: false,
                    borderColor: "#fff",
                    tension: 0.4,
                    pointRadius: 3
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        });

        // Charging Count Line Chart
        new Chart(document.getElementById("chargingChart"), {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Charging Count",
                    data: [10, 20, 35, 60, 90, 123],
                    fill: false,
                    borderColor: "#fff",
                    tension: 0.4,
                    pointRadius: 3
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        });

        // Wi-Fi Users Line Chart
        new Chart(document.getElementById("wifiChart"), {
            type: "line",
            data: {
                labels: ["W1", "W2", "W3", "W4", "W5"],
                datasets: [{
                    data: [400, 600, 800, 700, 950],
                    borderColor: "#fff",
                    fill: false,
                    tension: 0.4,
                    pointRadius: 3
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        });

        // Data Usage Chart
        new Chart(document.getElementById("dataChart"), {
            type: "line",
            data: {
                labels: ["P1", "P2", "P3", "P4", "P5"],
                datasets: [{
                    data: [100, 150, 200, 180, 220],
                    borderColor: "#fff",
                    fill: false,
                    tension: 0.4,
                    pointRadius: 3
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        });

        // Temperature Chart (Bar)
        new Chart(document.getElementById("tempChart"), {
            type: "bar",
            data: {
                labels: ["P1", "P2", "P3", "P4", "P5"],
                datasets: [{
                    data: [18, 20, 19, 21, 22],
                    backgroundColor: "#fff",
                    borderRadius: 4
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        });