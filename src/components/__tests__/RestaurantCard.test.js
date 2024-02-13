const { render, screen } = require("@testing-library/react");
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with Props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const nameOfRestaurant = screen.getByText("Theobroma");
  expect(nameOfRestaurant).toBeInTheDocument();
});
