function FormUncontrolled() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.colorTitle.value);
    console.log(e.target.colorCode.value);
    console.log(e.target.rating.value);
    console.log(e.target.temp.value);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="colorTitle">title: </label>
      <input id="colorTitle" type="text" required name="colorTitle" />
      <br />
      <br />
      <label htmlFor="colorCode">code: </label>
      <input id="colorCode" type="color" required name="colorCode" defaultValue="#000000" />
      <br />
      <select name="rating" id="rating">
        <option value="bad">bad</option>
        <option value="regular">regular</option>
        <option value="good">good</option>
        <option value="veryGood">very good</option>
      </select>
      <br />
      <label htmlFor="neutral">Neutral</label>
      <input
        type="radio"
        name="temp"
        id="neutral"
        value="neutral"
      />
      <label htmlFor="cold">Cold</label>
      <input
        type="radio"
        name="temp"
        id="cold"
        value="cold"
      />
      <label htmlFor="hot">Hot</label>
      <input type="radio" name="temp" id="hot" value="hot" />
      <br />
      <input type="submit" value="Add" />
      <input type="reset" value="Reset" />
    </form>
  );
}

export default FormUncontrolled;