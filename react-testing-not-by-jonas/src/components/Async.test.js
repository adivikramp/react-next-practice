import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if requests succeeds", async () => {
    // Arrange
    render(<Async />);

    // Act
    // Nothing

    // Assemble
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
