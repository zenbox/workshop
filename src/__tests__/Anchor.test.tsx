import React from "react";
import renderer from "react-test-renderer";

// import the component that we are testing
import Anchor from "../../components/Anchor";

// The testsuite:
describe("Anchor Component Tests", () => {
    // Test 1
    test("CSS-Klasse `hovered` gesetzt bei `mouseEnter`", () => {
        // ARRANGE, ACT, ASSERT
        // ARRANGE: render the component
        const dom = renderer.create(
            <Anchor
                href="home"
                className="normal">
                Linktext
            </Anchor>
        );

        let tree = dom.toJSON();
        console.log(tree);

        // ACT: simulate a mouseEnter event
        tree.props.onMouseEnter(dom.root.findByType("a"));

        // ASSERT: check if the CSS class is set
        expect(dom.root.findByType("a").props.className).toBe("hovered");
    });
});


