export function load() {
  const allProviders = [
    {
      address: {
        city: "Dover",
        line1: "",
        line2: null,
        state: "New Hampshire",
        zip: "03820",
      },
      downloadId: "1561K_9WQBjDxcJkQcRbLOsxeby0c2SPX",
      name: "Wentworth Douglass Hospital",
    },
  ];

  const downloadedProviders = [allProviders[0]];

  return {
    allProviders,
    downloadedProviders,
  };
}
