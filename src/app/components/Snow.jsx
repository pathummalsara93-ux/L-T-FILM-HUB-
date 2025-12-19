"use client";

export default function Snow() {
  const flakes = Array.from({ length: 35 });

  return (
    <>
      {flakes.map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: Math.random() * 100 + "vw",
            fontSize: 10 + Math.random() * 18 + "px",
            animationDuration: 6 + Math.random() * 6 + "s",
          }}
        >
          ❄
        </div>
      ))}
    </>
  );
}
