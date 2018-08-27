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
    "assets/zombie.png",
    "assets/bullet.png",
    "assets/player.png",
    "assets/building.png",
    "assets/blood.png",
    "assets/z.png",
    "assets/_player.png",
    "assets/bg.png",
    "assets/obj_barrels.png",
    "assets/p1.png",
    "assets/p2.png",
    "assets/p3.png",
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

export let policeCarAnimations = AnimationsBuilder.builder().addAnimation("sirens", [
    "assets/p1.png",
    "assets/p2.png",
    "assets/p3.png"
]).getAnimations()

export default assets