<script setup lang="ts">
import { ref } from "vue";
import json from "@/assets/periodic-table-lookup.json";
import Modal from "@/components/Modal.vue";

type PeriodicElement = {
  name: string;
  appearance: string | null;
  atomic_mass: number;
  boil: number | null;
  category: string | null;
  density: number | null;
  discovered_by: string | null;
  melt: number | null;
  molar_heat: number | null;
  named_by: string | null;
  number: number;
  period: number;
  group: number;
  phase: string;
  source: string;
  bohr_model_image: string | null;
  bohr_model_3d: string | null;
  spectral_img: string | null;
  summary: string | null;
  symbol: string;
  xpos: number;
  ypos: number;
  wxpos: number;
  wypos: number;
  shells: number[] | null;
  electron_configuration: string;
  electron_configuration_semantic: string;
  electron_affinity: number;
  electronegativity_pauling: any | null;
  ionization_energies: number[] | null;
  "cpk-hex": string;
  image: {
    title: string;
    url: string;
    attribution: null;
  } | null;
  block: string;
};
const PERIODIC_TABLE_DATA = json as unknown as Record<
  string,
  PeriodicElement | string[]
>;

const showLanthanides = ref(false);
const showActinides = ref(false);
const elementDetails = ref<PeriodicElement | null>(null);

function onElementClick(e: MouseEvent) {
  if (e.currentTarget) {
    const td = e.currentTarget as HTMLElement;
    const elementName = td.getAttribute("data-name");
    const elementData = elementName ? PERIODIC_TABLE_DATA[elementName] : null;
    if (elementData) {
      elementDetails.value = elementData as PeriodicElement;
    }
  }
}
</script>

<template>
  <main>
    <h1>Periodic Table</h1>
    <!-- it can't be called periodic "table" if it's not a <table /> -->
    <table>
      <tbody>
        <tr>
          <td class="group"></td>
          <td class="group">1</td>
          <td colspan="16"></td>
          <td class="group">18</td>
        </tr>
        <tr>
          <td class="period">1</td>
          <td @click="onElementClick" class="element nonmetal" data-name="hydrogen">
            <small>1</small> H <small>Hydrogen</small>
          </td>
          <td class="group">2</td>
          <td colspan="10" rowspan="2">
            <div id="legend">
              <span class="alkali">ALKALI METALS</span>
              <span class="alkaline">ALKALINE EARTH METALS</span>
              <span class="transition-metal">TRANSITION METALS</span>
              <span class="post-transition-metal">POST-TRANSITION METALS</span>
              <span class="metalloid">METALLOIDS</span>
              <span class="nonmetal">OTHER NONMETALS</span>
              <span class="halogen">HALOGEN</span>
              <span class="unknown">UNKNOWN PROPERTIES</span>
              <span class="noble-gas">NOBLE GASES</span>
              <span class="lanthanide">LANTHANIDES</span>
              <span class="actinide">ACTINIDES</span>
            </div>
          </td>
          <td class="group">13</td>
          <td class="group">14</td>
          <td class="group">15</td>
          <td class="group">16</td>
          <td class="group">17</td>
          <td @click="onElementClick" class="element noble-gas" data-name="helium">
            <small>2</small> He <small>Helium</small>
          </td>
        </tr>
        <tr>
          <td class="period">2</td>
          <td @click="onElementClick" class="element alkali" data-name="lithium">
            <small>3</small> Li <small>Lithium</small>
          </td>
          <td @click="onElementClick" class="element alkaline" data-name="beryllium">
            <small>4</small> Be <small>Beryllium</small>
          </td>
          <td @click="onElementClick" class="element metalloid" data-name="boron">
            <small>5</small> B <small>Boron</small>
          </td>
          <td @click="onElementClick" class="element nonmetal" data-name="carbon">
            <small>6</small> C <small>Carbon</small>
          </td>
          <td @click="onElementClick" class="element nonmetal" data-name="nitrogen">
            <small>7</small> N <small>Nitrogen</small>
          </td>
          <td @click="onElementClick" class="element nonmetal" data-name="oxygen">
            <small>8</small> O <small>Oxygen</small>
          </td>
          <td @click="onElementClick" class="element halogen" data-name="fluorine">
            <small>9</small> F <small>Fluorine</small>
          </td>
          <td @click="onElementClick" class="element noble-gas" data-name="neon">
            <small>10</small> Ne <small>Neon</small>
          </td>
        </tr>
        <tr>
          <td class="period">3</td>
          <td @click="onElementClick" class="element alkali" data-name="sodium">
            <small>11</small> Na <small>Sodium</small>
          </td>
          <td @click="onElementClick" class="element alkaline" data-name="magnesium">
            <small>12</small> Mg <small>Magnesium</small>
          </td>
          <td class="group">3</td>
          <td class="group">4</td>
          <td class="group">5</td>
          <td class="group">6</td>
          <td class="group">7</td>
          <td class="group">8</td>
          <td class="group">9</td>
          <td class="group">10</td>
          <td class="group">11</td>
          <td class="group">12</td>
          <td @click="onElementClick" class="element post-transition-metal" data-name="aluminium">
            <small>13</small> Al <small>Aluminium</small>
          </td>
          <td @click="onElementClick" class="element metalloid" data-name="silicon">
            <small>14</small> Si <small>Silicon</small>
          </td>
          <td @click="onElementClick" class="element nonmetal" data-name="phosphorus">
            <small>15</small> P <small>Phosphorus</small>
          </td>
          <td @click="onElementClick" class="element nonmetal" data-name="sulfur">
            <small>16</small> S <small>Sulfur</small>
          </td>
          <td @click="onElementClick" class="element halogen" data-name="chlorine">
            <small>17</small> Cl <small>Chlorine</small>
          </td>
          <td @click="onElementClick" class="element noble-gas" data-name="argon">
            <small>18</small> Ar <small>Argon</small>
          </td>
        </tr>
        <tr>
          <td class="period">4</td>
          <td @click="onElementClick" class="element alkali" data-name="potassium">
            <small>19</small> K <small>Potassium</small>
          </td>
          <td @click="onElementClick" class="element alkaline" data-name="calcium">
            <small>20</small> Ca <small>Calcium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="scandium">
            <small>21</small> Sc <small>Scandium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="titanium">
            <small>22</small> Ti <small>Titanium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="vanadium">
            <small>23</small> V <small>Vanadium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="chromium">
            <small>24</small> Cr <small>Chromium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="manganese">
            <small>25</small> Mn <small>Manganese</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="iron">
            <small>26</small> Fe <small>Fron</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="cobalt">
            <small>27</small> Co <small>Cobalt</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="nickel">
            <small>28</small> Ni <small>Nickel</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="copper">
            <small>29</small> Cu <small>Copper</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="zinc">
            <small>30</small> Zn <small>Zinc</small>
          </td>
          <td @click="onElementClick" class="element post-transition-metal" data-name="gallium">
            <small>31</small> Ga <small>Gallium</small>
          </td>
          <td @click="onElementClick" class="element metalloid" data-name="germanium">
            <small>32</small> Ge <small>Germanium</small>
          </td>
          <td @click="onElementClick" class="element metalloid" data-name="arsenic">
            <small>33</small> As <small>Arsenic</small>
          </td>
          <td @click="onElementClick" class="element nonmetal" data-name="selenium">
            <small>34</small> Se <small>Selenium</small>
          </td>
          <td @click="onElementClick" class="element halogen" data-name="bromine">
            <small>35</small> Br <small>Bromine</small>
          </td>
          <td @click="onElementClick" class="element noble-gas" data-name="krypton">
            <small>36</small> Kr <small>Krypton</small>
          </td>
        </tr>
        <tr>
          <td class="period">5</td>
          <td @click="onElementClick" class="element alkali" data-name="rubidium">
            <small>37</small> Rb <small>Rubidium</small>
          </td>
          <td @click="onElementClick" class="element alkaline" data-name="strontium">
            <small>38</small> Sr <small>Strontium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="yttrium">
            <small>39</small> Y <small>Yttrium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="zirconium">
            <small>40</small> Zr <small>Zirconium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="niobium">
            <small>41</small> Nb <small>Niobium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="molybdenum">
            <small>42</small> Mo <small>Molybdenum</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="technetium">
            <small>43</small> Tc <small>Technetium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="ruthenium">
            <small>44</small> Ru <small>Ruthenium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="rhodium">
            <small>45</small> Rh <small>Rhodium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="palladium">
            <small>46</small> Pd <small>Palladium</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="silver">
            <small>47</small> Ag <small>Silver</small>
          </td>
          <td @click="onElementClick" class="element transition-metal" data-name="cadmium">
            <small>48</small> Cd <small>Cadmium</small>
          </td>
          <td @click="onElementClick" class="element post-transition-metal" data-name="indium">
            <small>49</small> In <small>Indium</small>
          </td>
          <td @click="onElementClick" class="element post-transition-metal" data-name="tin">
            <small>50</small> Sn <small>Tin</small>
          </td>
          <td @click="onElementClick" class="element metalloid" data-name="antimony">
            <small>51</small> Sb <small>Antimony</small>
          </td>
          <td @click="onElementClick" class="element metalloid" data-name="tellurium">
            <small>52</small> Te <small>Tellurium</small>
          </td>
          <td @click="onElementClick" class="element halogen" data-name="iodine">
            <small>53</small> I <small>Iodine</small>
          </td>
          <td @click="onElementClick" class="element noble-gas" data-name="xenon">
            <small>54</small> Xe <small>Xenon</small>
          </td>
        </tr>
        <tr>
          <td class="period">6</td>
          <td @click="onElementClick" class="element alkali" data-name="cesium">
            <small>55</small> Cs <small>Cesium</small>
          </td>
          <td @click="onElementClick" class="element alkaline" data-name="barium">
            <small>65</small> Ba <small>Barium</small>
          </td>
          <td id="lanthanides" tabindex="0" @click="
            () => {
              showLanthanides = !showLanthanides;
              showActinides = false;
            }
          " :class="{ active: showLanthanides }">
            <div>LANTHANIDES</div>
          </td>

          <!-- lanthanides -->
          <template v-if="showLanthanides">
            <td @click="onElementClick" class="element lanthanide" data-name="lanthanum">
              <small>57</small> La <small>Lanthanum</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="cerium">
              <small>58</small> Ce <small>Cerium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="praseodymium">
              <small>59</small> Pr <small>Praseodymium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="neodymium">
              <small>60</small> Nd <small>Neodymium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="promethium">
              <small>61</small> Pm <small>Promethium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="samarium">
              <small>62</small> Sm <small>Samarium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="europium">
              <small>63</small> Eu <small>Europium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="gadolinium">
              <small>64</small> Gd <small>Gadolinium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="terbium">
              <small>65</small> Tb <small>Terbium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="dysprosium">
              <small>66</small> Dy <small>Dysprosium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="holmium">
              <small>67</small> Ho <small>Holmium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="erbium">
              <small>68</small> Er <small>Erbium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="thulium">
              <small>69</small> Tm <small>Thulium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="ytterbium">
              <small>70</small> Yb <small>Ytterbium</small>
            </td>
            <td @click="onElementClick" class="element lanthanide" data-name="lutetium">
              <small>71</small> Lu <small>Lutetium</small>
            </td>
          </template>
          <template v-else>
            <td @click="onElementClick" class="element lanthanides-switch transition-metal" data-name="hafnium">
              <small>72</small> Hf <small>Hafnium</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch transition-metal" data-name="tantalum">
              <small>73</small> Ta <small>Tantalum</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch transition-metal" data-name="tungsten">
              <small>74</small> W <small>Tungsten</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch transition-metal" data-name="rhenium">
              <small>75</small> Re <small>Rhenium</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch transition-metal" data-name="osmium">
              <small>76</small> Os <small>Osmium</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch transition-metal" data-name="iridium">
              <small>77</small> Ir <small>Iridium</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch transition-metal" data-name="platinum">
              <small>78</small> Pt <small>Platinum</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch transition-metal" data-name="gold">
              <small>79</small> Au <small>Gold</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch transition-metal" data-name="mercury">
              <small>80</small> Hg <small>Mercury</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch post-transition-metal" data-name="thallium">
              <small>81</small> Tl <small>Thallium</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch post-transition-metal" data-name="lead">
              <small>82</small> Pb <small>Lead</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch post-transition-metal" data-name="bismuth">
              <small>83</small> Bi <small>Bismuth</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch metalloid" data-name="polonium">
              <small>84</small> Po <small>Polonium</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch halogen" data-name="astatine">
              <small>85</small> At <small>Astatine</small>
            </td>
            <td @click="onElementClick" class="element lanthanides-switch noble-gas" data-name="radon">
              <small>86</small> Rn <small>Radon</small>
            </td>
          </template>
        </tr>
        <tr>
          <td class="period">7</td>
          <td @click="onElementClick" class="element alkali" data-name="francium">
            <small>87</small> Fr <small>Francium</small>
          </td>
          <td @click="onElementClick" class="element alkaline" data-name="radium">
            <small>88</small> Ra <small>Radium</small>
          </td>
          <td id="actinides" tabindex="0" @click="
            () => {
              showActinides = !showActinides;
              showLanthanides = false;
            }
          " :class="{ active: showActinides }">
            <div>ACTINIDES</div>
          </td>

          <!-- actinides -->
          <template v-if="showActinides">
            <td @click="onElementClick" class="element actinide" data-name="actinium">
              <small>89</small> Ac <small>Actinium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="thorium">
              <small>90</small> Th <small>Thorium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="protactinium">
              <small>91</small> Pa <small>Protactinium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="uranium">
              <small>92</small> U <small>Uranium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="neptunium">
              <small>93</small> Np <small>Neptunium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="plutonium">
              <small>94</small> Pu <small>Plutonium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="americium">
              <small>95</small> Am <small>Americium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="curium">
              <small>96</small> Cm <small>Curium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="berkelium">
              <small>97</small> Bk <small>Berkelium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="californium">
              <small>98</small> Cf <small>Californium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="einsteinium">
              <small>99</small> Es <small>Einsteinium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="fermium">
              <small>100</small> Fm <small>Fermium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="mendelevium">
              <small>101</small> Md <small>Mendelevium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="nobelium">
              <small>102</small> No <small>Nobelium</small>
            </td>
            <td @click="onElementClick" class="element actinide" data-name="lawrencium">
              <small>103</small> Lr <small>Lawrencium</small>
            </td>
          </template>
          <template v-else>
            <td @click="onElementClick" class="element actinides-switch transition-metal" data-name="rutherfordium">
              <small>104</small> Rf <small>Rutherfordium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch transition-metal" data-name="dubnium">
              <small>105</small> Db <small>Dubnium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch transition-metal" data-name="seaborgium">
              <small>106</small> Sg <small>Seaborgium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch transition-metal" data-name="bohrium">
              <small>107</small> Bh <small>Bohrium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch transition-metal" data-name="hassium">
              <small>108</small> Hs <small>Hassium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch unknown" data-name="meitnerium">
              <small>109</small> Mt <small>Meitnerium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch unknown" data-name="darmstadtium">
              <small>110</small> Ds <small>Darmstadtium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch unknown" data-name="roentgenium">
              <small>111</small> Rg <small>Roentgenium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch transition-metal" data-name="copernicium">
              <small>112</small> Cn <small>Copernicium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch unknown" data-name="nihonium">
              <small>113</small> Nh <small>Nihonium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch unknown" data-name="flerovium">
              <small>114</small> Fl <small>Flerovium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch unknown" data-name="moscovium">
              <small>115</small> Mc <small>Moscovium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch unknown" data-name="livermorium">
              <small>116</small> Lv <small>Livermorium</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch unknown" data-name="tennessine">
              <small>117</small> Ts <small>Tennessine</small>
            </td>
            <td @click="onElementClick" class="element actinides-switch unknown" data-name="oganesson">
              <small>118</small> Og <small>Oganesson</small>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </main>

  <Modal :title="elementDetails?.name" :is-open="elementDetails !== null" @onClickClose="elementDetails = null">
    <pre>{{ elementDetails }}</pre>
  </Modal>
</template>

<style scoped>
main {
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0;
  overflow: auto;
}

table {
  --cell-size: 68px;
  margin: auto;

  tr>td.element,
  tr>td#lanthanides,
  tr>td#actinides {
    max-height: var(--cell-size);
    max-width: var(--cell-size);
    min-height: var(--cell-size);
    min-width: var(--cell-size);
    height: var(--cell-size);
    width: var(--cell-size);
  }

  tr>td.element {
    cursor: pointer;
    border: 2px solid var(--text);
    text-align: center;
    font-size: 1.25rem;
    font-weight: bolder;

    small {
      display: block;
      font-size: 0.75rem !important;
      text-align: center;
    }
  }

  tr>td.group {
    max-height: 1rem !important;
    height: 1rem !important;
    vertical-align: bottom;
    text-align: center;
  }

  tr>td[colspan] {
    border: none;
  }

  tr>td:hover {
    border-color: blue !important;
  }

  tr>td#lanthanides,
  tr>td#actinides {
    cursor: pointer;
    border: 2px solid var(--text);

    div {
      display: grid;
      place-content: center;
      font-size: 0.75rem;
      rotate: -45deg;
    }
  }

  tr>td#lanthanides.active {
    background-color: green;
    color: white;
  }

  tr>td#actinides.active {
    background-color: red;
    color: white;
  }
}

#legend {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem;

  span {
    padding: 0.25rem;
    font-weight: bolder;
  }
}

pre {
  margin: 0;
}

.hide {
  display: none;
}

.alkali {
  background-color: orangered;
  color: white;
}

.alkaline {
  background-color: orange;
  color: black;
}

.transition-metal {
  background-color: teal;
  color: white;
}

.post-transition-metal {
  background-color: skyblue;
  color: black;
}

.metalloid {
  background-color: indigo;
  color: white;
}

.nonmetal {
  background-color: purple;
  color: white;
}

.halogen {
  background-color: lightgreen;
  color: black;
}

.unknown {
  background-color: gray;
  color: white;
}

.noble-gas {
  background-color: midnightblue;
  color: white;
}

.lanthanide {
  background-color: green;
  color: white;
}

.actinide {
  background-color: red;
  color: white;
}
</style>
