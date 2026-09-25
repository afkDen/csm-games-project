# Visual / Interaction Direction

## Register

Premium experimental portfolio piece: **playful pastel motion design + anime still art + spatial lens interaction + compact games**.

The site should feel polished, colorful, kinetic, and authored — not like a dark anime promo page and not like a conventional portfolio with motion sprinkled on top.

## Locked hierarchy

1. **Stills lead the visual design.** Read `docs/CREATIVE_DIRECTION_CONTRACT.md`.
2. **Character truth leads behavior.** Read `docs/CHARACTER_FIDELITY_MATRIX.md`.
3. **Scroll leads cinematic progression.** Read `docs/SCROLL_EXPERIENCE_CONTRACT.md`.
4. **Spatial depth prevents flatness.** Read `docs/SPATIAL_DEPTH_CONTRACT.md`.
5. **Performance protects usability, not minimalism.** Read `docs/PERFORMANCE_AND_QUALITY.md`.

## Shared identity

The identity comes from a clash of:

- supplied character stills treated as living spatial compositions;
- bright/pastel optical color and translucent lens surfaces;
- crisp eyewear geometry;
- large editorial typography that participates in depth;
- smooth, tactile, sometimes playful motion;
- character-owned interaction grammars;
- chibi game worlds that inherit each route's art direction.

## Shared visual constants

- eyewear frame / lens silhouette;
- luminous, color-rich global atmosphere;
- optical distortion / reflection / refraction;
- spatial depth and occlusion;
- camera passage through surfaces;
- expressive type integrated into composition;
- a coherent pastel-forward shell around strongly authored character worlds.

Dark values may appear as deliberate contrast or tension. They are not the default global mood.

## Character differentiation hypotheses

These are behavioral hypotheses, not canon claims. Refine them from approved stills and source-material research.

- **Denji:** impulsive forward momentum, warm citrus/coral energy, tactile mechanical rhythm, velocity response.
- **Makima:** composed magnetic control, ivory/blush/rose restraint, exact centered motion, subtle environmental convergence.
- **Aki:** cool airy negative space, powder blue/lavender, lateral architectural depth, quiet precise pacing.
- **Power:** bubblegum/peach/cyan chaos, elastic asymmetry, reactive type, velocity-sensitive disruption.
- **Reze:** pearl/powder-blue/lilac dreaminess, continuous fluid camera language, gradually destabilized spatial continuity.

The supplied stills can override palette assumptions. They cannot be ignored in favor of a generic character color scheme.

## Anti-generic rules

Avoid:

- black/red/grunge as automatic franchise shorthand;
- five identical full-screen sections with different colors;
- scroll-triggered fade-up as the dominant route grammar;
- a flat hero image with decorative particles;
- generic orbit-camera 3D heroes;
- floating spheres / torus knots without a concept role;
- glassmorphism card systems as the main aesthetic;
- standard SaaS component rhythm;
- uniform easing and motion grammar across worlds;
- one generic `CharacterWorld` scene fed mostly by config values;
- five games that share one loop with different skins;
- performance-driven simplification that deletes signature depth/motion before secondary costs are optimized.

## Motion-site benchmark rule

The target feeling is an authored motion-site / scrollcraft experience: the user should feel that scroll is driving a visual timeline and manipulating a living composition.

A route that looks good in screenshots but behaves like stacked sections does not pass.

## Screenshot + motion test

Every major viewport should work as a composed portfolio still **and** its transition to the next state should feel authored. Entry and exit frames alone are insufficient; intermediate states matter.

## Transition continuity and uniqueness

Major transitions are authored interaction systems, not disposable entrance effects. Every character route must own a materially different transition grammar while remaining freely reversible/retargetable where the interaction is expected to support it. Scroll reversal, eligible button presses, duplicate activation, and route/game ownership changes must not leave stale timelines or contradictory visual state. See `docs/TRANSITION_CONTINUITY_CONTRACT.md`.
