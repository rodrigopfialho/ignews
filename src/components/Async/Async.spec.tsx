import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { Async } from ".";

test('it render correctly', async () => {
    render(
        <Async />

    )
        expect(screen.getByText('Hello world')).toBeInTheDocument()

        await waitForElementToBeRemoved(screen.queryByText('Button'))
       
        
})