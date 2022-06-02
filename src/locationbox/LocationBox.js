import './LocationBox.css';

function LocationBox() {
  return (
    <div className="LocationBox">
      <form>
          <label>
            <p className="LocationText">Tell us where you are now</p>
            <input className="InputTextBox" type="text" />
          </label>
           <input className="SubmitButton" type="submit" value="Enter Address" />
      </form>
    </div>
  );
}

export default LocationBox;
