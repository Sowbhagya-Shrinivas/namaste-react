const { render , screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import"@testing-library/jest-dom";

it("Should load Header Component wih Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button",{name:"Login"});
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component wih Cart items 0 ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("0 items");
    expect(cartItems).toBeInTheDocument();
  });

it("Should Change Login button to Logout OnClick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{name:"Logout"});
  expect(loginButton).toBeInTheDocument();
  expect(logoutButton).toBeInTheDocument();
});
