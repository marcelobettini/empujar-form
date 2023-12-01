import { useState } from "react";
function FormControlled() {
  const [customer, setCustomer] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    phone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(customer);
    fetch('https://654436695a0b4b04436c25f6.mockapi.io/customer', {
      method: "POST",
      body: customer
    }).then(res => res.json()).then(res => console.log(res)).catch(err => console.error(err));
  };
  const handleChange = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <input
          placeholder="first name..."
          name="name"
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="last name..."
          name="lastName"
          onChange={handleChange}
        />
        <br />
        <input placeholder="email..." name="email" onChange={handleChange} />
        <br />
        <input
          placeholder="address..."
          name="address"
          onChange={handleChange}
        />
        <br />
        <input placeholder="city..." name="city" onChange={handleChange} />
        <br />
        <input placeholder="phone..." name="phone" onChange={handleChange} />
        <br />
        <input type="submit" value="enviar a la API de Mili y Giu" />
      </form>

    </div>
  );
}

export default FormControlled;