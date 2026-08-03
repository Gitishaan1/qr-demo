import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data, error } = await supabaseAdmin
    .from("scans")
    .select("*")
    .order("timestamp", { ascending: false });

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>QR Scan Dashboard</h1>

      <h3>Total Scans: {data.length}</h3>

      <table
        border={1}
        cellPadding={10}
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: 20,
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>IP Address</th>
            <th>Browser</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {data.map((scan) => (
            <tr key={scan.id}>
              <td>{scan.id}</td>
              <td>{scan.ip}</td>
              <td>{scan.browser}</td>
              <td>{new Date(scan.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}