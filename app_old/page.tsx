
const professions = [
  "Architect of Dreams",
  "Neurointerface Ethicist",
  "Digital Twin Curator",
  "AI Diplomat"
];

export default function Home() {
  return (
    <main style={{maxWidth:1100,margin:'0 auto',padding:'60px'}}>
      <h1 style={{fontSize:'4rem',color:'#FFB347'}}>Institute of Emerging Professions</h1>
      <p>Training specialists for industries that do not yet exist.</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'20px',marginTop:'40px'}}>
        {professions.map((p)=>(
          <div key={p} style={{border:'1px solid #333',padding:'20px',borderRadius:'12px'}}>
            <h2>{p}</h2>
            <p>Projected demand in 2047.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
