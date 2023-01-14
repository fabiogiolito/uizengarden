<script>
  import Highlight from "$lib/Highlight.svelte";

  import Select from "$lib/Select.svelte";
  import Button from "$lib/Button.svelte";
  import ListItem from "$lib/ListItem.svelte";

  import IconArrowRight from "$lib/icons/IconArrowRight.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";
  import IconAlignLeft from "$lib/icons/IconAlignLeft.svelte";
  import IconAlignCenter from "$lib/icons/IconAlignCenter.svelte";
  import IconAlignRight from "$lib/icons/IconAlignRight.svelte";
  import IconAlignJustify from "$lib/icons/IconAlignJustify.svelte";


  const fruits = ['Apple', 'Banana', 'Blueberry', 'Cantaloupe', 'Cherry', 'Grape', 'Kiwi', 'Mango', 'Orange', 'Peach', 'Pineapple', 'Plum', 'Raspberry', 'Strawberry', 'Watermelon'];
  const fruitsWithEmojis = [ { name: 'Apple', emoji: '🍎' }, { name: 'Banana', emoji: '🍌' }, { name: 'Blueberry', emoji: '🫐' }, { name: 'Cantaloupe', emoji: '🍈' }, { name: 'Cherry', emoji: '🍒' }, { name: 'Grape', emoji: '🍇' }, { name: 'Kiwi', emoji: '🥝' }, { name: 'Mango', emoji: '🥭' }, { name: 'Orange', emoji: '🍊' }, { name: 'Peach', emoji: '🍑' }, { name: 'Pineapple', emoji: '🍍' }, { name: 'Strawberry', emoji: '🍓' }, { name: 'Watermelon', emoji: '🍉' }];
  const alignOptions = [{ name: 'Left', icon: IconAlignLeft }, { name: 'Center', icon: IconAlignCenter }, { name: 'Right', icon: IconAlignRight }, { name: 'Justify', icon: IconAlignJustify }];
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function fetchContent(filter = null) {
    if (!filter) return [];
    await sleep(500);
    const countryList = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas (the)",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia (Plurinational State of)",
      "Bonaire, Sint Eustatius and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory (the)",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cayman Islands (the)",
      "Central African Republic (the)",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands (the)",
      "Colombia",
      "Comoros (the)",
      "Congo (the Democratic Republic of the)",
      "Congo (the)",
      "Cook Islands (the)",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czechia",
      "Côte d'Ivoire",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic (the)",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Falkland Islands (the) [Malvinas]",
      "Faroe Islands (the)",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories (the)",
      "Gabon",
      "Gambia (the)",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard Island and McDonald Islands",
      "Holy See (the)",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran (Islamic Republic of)",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea (the Democratic People's Republic of)",
      "Korea (the Republic of)",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic (the)",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands (the)",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia (Federated States of)",
      "Moldova (the Republic of)",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands (the)",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger (the)",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands (the)",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine, State of",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines (the)",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Republic of North Macedonia",
      "Romania",
      "Russian Federation (the)",
      "Rwanda",
      "Réunion",
      "Saint Barthélemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin (French part)",
      "Saint Pierre and Miquelon",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Sint Maarten (Dutch part)",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan (the)",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania, United Republic of",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands (the)",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates (the)",
      "United Kingdom of Great Britain and Northern Ireland (the)",
      "United States Minor Outlying Islands (the)",
      "United States of America (the)",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela (Bolivarian Republic of)",
      "Viet Nam",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe",
      "Åland Islands"
    ];
    return countryList.filter(c => c.toLowerCase().match(filter.toLowerCase()));
  }

</script>


<h2>Select</h2>

<hr />

<!-- Basic example -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What is your favorite fruit?</p>
      <Select options={fruits} selected={["Banana"]} style="width: 320px;" />
    </div>
  </div>
</div>
<Highlight code={`
  <Select options={['Apple', 'Banana', ...]} selected={["Banana"]} />
`} />

<!-- Basic example -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What is your favorite fruit?</p>
      <Select selectedIconRight={true} options={fruits} selected={["Banana"]} style="width: 320px;" />
      <p style="margin: 1.5em 0 0.5em 0;">What is your least favorite fruit?</p>
      <Select selectedIcon={IconArrowRight} options={fruits} selected={["Cantaloupe"]} style="width: 320px;" />
    </div>
  </div>
</div>
<Highlight code={`
  <Select selectedIconRight options={fruits} selected={["Banana"]} />
  <Select selectedIcon={IconArrowRight} options={fruits} selected={["Cantaloupe"]} />
`} />

<!-- With Placeholder -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What is your favorite fruit?</p>
      <Select placeholder="Pick one" options={fruits} style="width: 320px;" />
    </div>
  </div>
</div>
<Highlight code={`
  <Select placeholder="Pick one" options={['Apple', 'Banana', ...]} />
`} />

<!-- Select multiple -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What are your favorite fruits?</p>
      <Select multiple placeholder="Pick multiple" options={fruits} style="width: 320px;" />
    </div>
  </div>
</div>
<Highlight code={`
  <Select multiple placeholder="Pick multiple" options={['Apple', 'Banana', ...]} />
`} />

<!-- Filter -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What is your favorite fruit?</p>
      <Select filter filterPlaceholder="Find fruit" placeholder="Choose one" options={fruits} style="width: 320px;" />
    </div>
  </div>
</div>
<Highlight code={`
  <Select filter filterPlaceholder="Find fruit" placeholder="Choose one" options={fruits} />
`} />

<!-- Filter with multiple -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What are your favorite fruits?</p>
      <Select multiple filter filterPlaceholder="Find fruit" placeholder="Pick multiple" options={fruits} style="width: 320px;" />
    </div>
  </div>
</div>
<Highlight code={`
  <Select filter filterPlaceholder="Find fruit" placeholder="Pick multiple" options={fruits} />
`} />

<!-- Object list -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What is your favorite fruit?</p>
      <Select options={fruitsWithEmojis} labelKey="name" style="width: 320px;" />
    </div>
  </div>
</div>
<Highlight code={`
  <!-- Set labelKey for list of objects -->
  <Select options={[{ name: 'Apple', emoji: '🍎' }, ...]} labelKey="name" />
`} />

<!-- Custom labels -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What is your favorite fruit?</p>
      <Select options={fruitsWithEmojis} labelKey="name" style="width: 320px;">
        <span slot="label" let:selected>
          {selected[0].emoji} &nbsp; {selected[0].name}
        </span>
        <span slot="optionLabel" let:option let:isSelected let:isFocused>
          {option.emoji} &nbsp; {option.name}
        </span>
      </Select>
    </div>
  </div>
</div>
<Highlight code={`
  <Select options={fruitsWithEmojis} labelKey="name">
    <span slot="label" let:selected>
      {selected[0].emoji} &nbsp; {selected[0].name}
    </span>
    <span slot="optionLabel" let:option let:isSelected let:isFocused>
      {option.emoji} &nbsp; {option.name}
    </span>
  </Select>
`} />

<!-- Custom labels -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Select options={alignOptions} labelKey="name" style="width: 120px;">
      <svelte:component slot="icon" let:selected this={selected[0].icon} />
      <svelte:component slot="optionIcon" let:option this={option.icon} />
    </Select>
  </div>
</div>
<Highlight code={`
  <Select options={alignOptions} labelKey="name" style="width: 120px;">
    <svelte:component slot="icon" let:selected this={selected[0].icon} />
    <svelte:component slot="optionIcon" let:option this={option.icon} />
  </Select>
`} />

<!-- Custom labels -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Select
      options={[{emoji: '🫥', emotion: 'Not sure'}, {emoji: '😀', emotion: 'Happy'}, {emoji: '🙁', emotion: 'Sad'}]}
      labelKey="emotion"
      let:focused let:open let:selected
    >
      <Button slot="trigger">
        How are you feeling? &nbsp;
        {open ? focused.emoji || selected[0].emoji : selected[0].emoji}
      </Button>
    </Select>
  </div>
</div>
<Highlight code={`
  <Select
    options={[{emoji: '🫥', emotion: 'Not sure'}, {emoji: '😀', emotion: 'Happy'}, {emoji: '🙁', emotion: 'Sad'}]}
    labelKey="emotion"
    let:focused let:open let:selected
  >
    <Button slot="trigger">
      How are you feeling? &nbsp;
      {open ? focused.emoji || selected[0].emoji : selected[0].emoji}
    </Button>
  </Select>
`} />


<!-- ======================================== -->
<!-- INPUTS -->

<!-- Input trigger -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What is your favorite fruit?</p>
      <Select input placeholder="Type to search" options={fruits} style="width: 320px;" />
    </div>
  </div>
</div>
<Highlight code={`
  <Select input placeholder="Type to search" options={fruits} />
`} />

<!-- Input trigger with create option -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">What is your favorite fruit?</p>
      <Select input let:inputValue placeholder="Search or create" options={fruits} style="width: 320px;">
        <Button slot="empty" on:click={() => alert("create " + inputValue)}>Create {inputValue}</Button>
      </Select>
    </div>
  </div>
</div>
<Highlight code={`
  <Select input let:inputValue placeholder="Search or create" options={fruits}>
    <Button slot="empty" on:click={() => handleCreate(inputValue)}>
      Create {inputValue}
    </Button>
  </Select>
`} />

<!-- ======================================== -->
<!-- REMOTE -->

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <div style="width: 320px;">
      <p style="margin-bottom: 0.5em;">Where do you live?</p>
      <Select filter filterPlaceholder="Search for a country" fetchOptions={fetchContent} placeholder="Select your country" style="width: 320px;">
        <svelte:fragment slot="empty" let:selectOption let:selected>
          {#if selected.length}
            <Button on:click={() => selectOption(selected[0])}>{selected[0]}</Button>
          {:else}
            <ListItem heading="popular" />
            {#each ["United States", "United Kingdom"] as option}
              <Button on:click={() => selectOption(option)}>{option}</Button>
            {/each}
          {/if}
        </svelte:fragment>
      </Select>
    </div>
  </div>
</div>
<Highlight code={`
  <Select filter
    filterPlaceholder="Search for a country"
    fetchOptions={fetchContent}
    placeholder="Select your country"
  >
    <!-- Show current selected or popular options -->
    <svelte:fragment slot="empty" let:selectOption let:selected>
      {#if selected.length}
        <Button on:click={() => selectOption(selected[0])}>{selected[0]}</Button>
      {:else}
        <ListItem heading="popular" />
        {#each ["United States", "United Kingdom"] as option}
          <Button on:click={() => selectOption(option)}>{option}</Button>
        {/each}
      {/if}
    </svelte:fragment>
  </Select>
`} />





<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Select hover direction="down" align="center" placeholder="Hover me" iconRight={false} options={fruits} />
    <Select direction="right" align="top" placeholder="Open right" iconRight={IconChevronRight} options={fruits} />
  </div>
</div>
<Highlight code={`
  <Select hover direction="down" align="center" placeholder="Hover me" iconRight={false} options={fruits} />
  <Select direction="right" align="top" placeholder="Open right" iconRight={IconChevronRight} options={fruits} />
`} />
