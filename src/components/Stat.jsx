function Stat({ label, percent }) {
  return (
    <p>
      <span className="number">{percent}%</span>
      <span className="text">{label ?? 'Skipped'}</span>
    </p>
  );
}

export default Stat;
