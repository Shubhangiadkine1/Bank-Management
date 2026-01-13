import React from "react";

const Loans = () => {
  const loans = [
    {
      title: "Home Loan",
      rate: "8.5% p.a.",
      desc: "Affordable home loans with flexible tenure."
    },
    {
      title: "Personal Loan",
      rate: "10.75% p.a.",
      desc: "Quick personal loans for your needs."
    },
    {
      title: "Car Loan",
      rate: "9.2% p.a.",
      desc: "Easy car loans with low EMIs."
    },
    {
      title: "Education Loan",
      rate: "7.9% p.a.",
      desc: "Support your education with easy loans."
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>HDFC Bank Loans</h1>
      <p style={styles.subheading}>
        Choose the best loan option for your needs
      </p>

      <div style={styles.cardContainer}>
        {loans.map((loan, index) => (
          <div key={index} style={styles.card}>
            <h2>{loan.title}</h2>
            <p><strong>Interest Rate:</strong> {loan.rate}</p>
            <p>{loan.desc}</p>
            <button style={styles.button}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  },
  heading: {
    fontSize: "36px",
    marginBottom: "10px"
  },
  subheading: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f4f6ff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#1e5bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Loans;
