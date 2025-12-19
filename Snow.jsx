export default function Snow() {
  const snowflakes = Array.from({ length: 30 });

  return (
    <>
      {snowflakes.map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: Math.random() * 100 + "vw",
            animationDuration: 5 + Math.random() * 5 + "s",
            fontSize: 10 + Math.random() * 20 + "px",
          }}
        >
          ❄
        </div>
      ))}
    </>
  );
}
