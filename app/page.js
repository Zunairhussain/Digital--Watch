
import DigitalClock from "./(components)/digitalClock/DigitalClock" ;
import Watch from "./(components)/watch/Watch";

function HomePage() {
  return (
    <div className="container">
      <DigitalClock />
      <Watch />
    </div>
  );
}

export default HomePage;
