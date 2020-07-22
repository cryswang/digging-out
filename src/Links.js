
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    // needs to be restyled such that it can display two links at
    // a time.
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        link one
        </Carousel.Item>
        <Carousel.Item>
        link two
        </Carousel.Item>
        <Carousel.Item>
        link three
        </Carousel.Item>
      </Carousel>
    );
  }
  
  render(<ControlledCarousel />);