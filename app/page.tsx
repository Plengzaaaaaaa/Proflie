import Image from "next/image";

export default function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.name}>รินรดา หวานดี</h1>
        <h style={styles.name}></h2>
        <Image
          src="/Profile.jpg"
          alt="โปรไฟล์"
          width={200}
          height={200}
          style={styles.image}
        />

        <p style={styles.quote}>
          "จงทำวันนี้ให้ดีที่สุด แล้ววันพรุ่งนี้จะดีเอง"
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #f9f9f9,rgb(240, 206, 12))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Prompt', sans-serif",
  },
  container: {
    textAlign: "center" as const,
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "20px",
    maxWidth: "400px",
    width: "90%",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  name: {
    fontSize: "28px",
    color: "#2c3e50",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  image: {
    borderRadius: "50%",
    border: "4px solid #00bcd4",
    marginBottom: "20px",
    transition: "transform 0.3s ease",
  },
  quote: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#555",
    lineHeight: 1.6,
  },
};
