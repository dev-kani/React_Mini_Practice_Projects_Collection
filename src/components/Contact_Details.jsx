import Contact_Card from "./Contact_Card_Project/Contact_Card";

const Contact_Details = () => {
  const contacts = [
    {
      img:  "/images/bill_gates.jpg",
      name: "Bill Gates",
      email: "bill.gates@microsoft.com",
      age: 66
    },
    {
      img: "/images/elon_musk.jpg",
      name: "Elon Musk",
      email: "elon.musk@spaceX.com",
      age: 50
    },
    {
      img: "/images/warren_buffet.jpg",
      name: "Warren Buffett",
      email: "warren.buffett@investor.com",
      age: 91
    },
  ]

  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=3")
  //   .then(response => response.json())
  //   .then(data => {
  //   setResults(data.results)
  //   });
  // }, [])

  return (
    <div>
      {contacts.map((contact, index) => {
        return (
        // <Contact_Card
        //   key={index}
        //   img={result.picture.large}
        //   name={result.name.first}
        //   email={result.email}
        //   age={result.dob.age}
        // />
        <Contact_Card
          key={index}
          img={process.env.PUBLIC_URL + contact.img}
          name={contact.name}
          email={contact.email}
          age={contact.age}
        />
      )})}
    </div>
  );
}

export default Contact_Details;