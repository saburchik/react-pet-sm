import React from 'react';
import ProfileStatus from "./ProfileInfo"
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Saburik" />);
        const root = component.root
        expect(root.props.status).toBe("Saburik");
    });

    test("testing span", () => {
        const component = create(<ProfileStatus status="Saburik" />);
        const root = component.root
        expect(() => {
            let span = root.findByType("span")
        }).toThrow();
    });
});