import { useState } from "react";
import DroupDowm from "./Component/DroupDowm";
import Form from "./Component/Form";

function App() {
  const [expenses, setexpenses] = useState([
    { item: "apple", amount: "100", category: "food", id: 1 },
    { item: "apple", amount: "150", category: "food", id: 2 },
    { item: "bengaluru to salem", amount: "300", category: "travel", id: 3 },
  ]);
  const [m, sm] = useState(true);
  const [tem, settem] = useState([]);

  const [description, setdescription] = useState("");
  const [amount, setamount] = useState("");
  const [cate, setcate] = useState("");
  const [id, setid] = useState(4);

  function onchangeitems(e) {
    e.preventDefault();
    setamount(e.target.value);
  }
  function onchangeamount(e) {
    e.preventDefault();
    setdescription(e.target.value);
  }
  function submit() {
    setexpenses([
      ...expenses,
      { item: description, amount: amount, category: cate, id: id },
    ]);
    setid((pre) => pre + 1);
    setdescription("");
    setamount("");
  }
  var t3;
  function category(e) {
    console.log(e.target.text);

    if (amount === "" || description === "") {
      if (e.target.text === "all") {
        settem([...expenses]);
      } else {
        var c = expenses;
        c = c.filter((t) => t.category === e.target.text);
        settem(c);
        sm(false);
      }

      return;
    }
    sm(true);
    console.log(e.target.text);
    setcate(e.target.text);
  }
  function deleteitem(id) {
    var c = expenses;
    c = c.filter((e) => e.id !== id);
    setexpenses(c);
  }
  function edit(id, des, amt, cate) {
    deleteitem(id);
    setamount(amt);
    setcate(cate);
    setdescription(des);
  }

  return (
    <>
      <div className="f d-flex ">
        <Form
          onchangeamount={onchangeamount}
          onchangeitems={onchangeitems}
          description={description}
          amount={amount}
        />
        <button onClick={submit}>summit</button>
      </div>

      <DroupDowm onchange={category} />
      <br />
      <br />
      <br />

      {m
        ? expenses.map((e) => {
            return (
              <div className="d d-flex" key={e.id}>
                <div>
                  {" "}
                  {". Description : " +
                    e.item +
                    " amount : " +
                    e.amount +
                    " category : " +
                    e.category}{" "}
                </div>
                <button
                  className="h ms-5 border-0"
                  onClick={() => deleteitem(e.id)}
                >
                  delete
                </button>
                <button
                  className="h ms-5 border-0"
                  onClick={() => edit(e.id, e.item, e.amount, e.category)}
                >
                  edit
                </button>
              </div>
            );
          })
        : tem.map((e) => {
            return (
              <div className="d d-flex" key={e.id * 10}>
                <div>
                  {" "}
                  {". Description : " +
                    e.item +
                    " amount : " +
                    e.amount +
                    " category : " +
                    e.category}{" "}
                </div>
                <button
                  className="h ms-5 border-0"
                  onClick={() => deleteitem(e.id)}
                >
                  delete
                </button>
                <button
                  className="h ms-5 border-0"
                  onClick={() => edit(e.id, e.item, e.amount, e.category)}
                >
                  edit
                </button>
              </div>
            );
          })}
    </>
  );
}

export default App;
