import React from "react";

const Accounts = () => {
  const accounts = [
    {
      title: "Savings Account",
      desc: "Earn interest on your savings with easy access.",
      features: ["ATM Card", "Net Banking", "Mobile Banking"]
    },
    {
      title: "Current Account",
      desc: "Best for businesses with high transaction limits.",
      features: ["Unlimited Transactions", "Overdraft Facility"]
    },
    {
      title: "Fixed Deposit",
      desc: "Secure investment with guaranteed returns.",
      features: ["High Interest", "Flexible Tenure"]
    },
    {
      title: "Salary Account",
      desc: "Special benefits for salaried employees.",
      features: ["Zero Balance", "Free Debit Card"]
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>HDFC Bank Accounts</h1>
      <p style={styles.subheading}>
        Choose the right account for your financial needs
      </p>

      <div style={styles.cardContainer}>
        {accounts.map((acc, index) => (
          <div key={index} style={styles.card}>
            <h2>{acc.title}</h2>
            <p>{acc.desc}</p>

            <ul>
              {acc.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button style={styles.button}>Open Account</button>
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
    width: "260px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f4f6ff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "left"
  },
  button: {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    border: "none",
    backgroundColor: "#1e5bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Accounts;
