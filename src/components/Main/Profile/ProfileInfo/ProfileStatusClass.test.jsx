import React from 'react';
import ProfileStatusClass from "./ProfileStatusClass"
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatusClass status="Saburik" />);
        const root = component.root
        expect(root.props.status).toBe("Saburik");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatusClass status="Saburik" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatusClass status="Saburik" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatusClass status="Saburik" />)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("Saburik")
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatusClass status="Saburik" />)
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("Saburik")
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatusClass status="Saburik" updateStatus={mockCallback} />)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });
});