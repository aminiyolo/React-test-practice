import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Type from "../Type";
import { OrderContextProvider } from "../../../contexts/OrderContext";

test("update product's total when products quantity change", async () => {
  render(<Type orderType="products" />, { wrapper: OrderContextProvider });

  const productsTotal = screen.getByText("총 가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  // 상품 하나 추가 시
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");
});
