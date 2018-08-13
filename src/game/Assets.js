import AnimationsBuilder from "../core/utils/AnimationsBuilder";

/**
 * Here you should put all of your image assets
 */
const assets = [
    "assets/modu-logo.png",
    "assets/spaceship.png",
    "assets/spaceship-alt.png",
    "assets/ground.png",
    "assets/wingMan1.png",
    "assets/wingMan2.png",
    "assets/wingMan3.png",
    "assets/wingMan4.png",
    "assets/wingMan5.png",
]

export let wingManAnimations = AnimationsBuilder.builder().addAnimation("wing", [
    "assets/wingMan1.png",
    "assets/wingMan2.png",
    "assets/wingMan3.png",
    "assets/wingMan4.png",
    "assets/wingMan5.png",
    "assets/wingMan4.png",
    "assets/wingMan3.png",
    "assets/wingMan2.png",
    "assets/wingMan1.png",
]).getAnimations();


export default assets