<script>
  import Highlight from "$lib/Highlight.svelte";

  import Select from "$lib/Select.svelte";
  import Button from "$lib/Button.svelte";
  import ListItem from "$lib/ListItem.svelte";

  import IconUser from "$lib/icons/IconUser.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";

  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function fetchContent(filter = null) {
    if (!filter) return ["Brazil", "Portugal"];
    await sleep(1000);
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

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Select options={['one', 'two', 'three']} placeholder="Pick one" />
    <Select options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
    <Select options={['one', 'two', 'three']} />
    <Select options={['Recent', 'Popular', 'Trending']} title="Sort by" />
    <Select options={['Recent', 'Popular', 'Trending']} title="Sort by" selected="Recent" />
  </div>
</div>
<Highlight code={`
  <Select options={['one', 'two', 'three']} placeholder="Pick one" />
  <Select options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
  <Select options={['one', 'two', 'three']} />
  <Select options={['Recent', 'Popular', 'Trending']} title="Sort by" />
  <Select options={['Recent', 'Popular', 'Trending']} title="Sort by" selected="Recent" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p>Input trigger</p>
    <p><Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} /></p>
    <p><Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} selected={['mango']} /></p>
    <p>
      <Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} let:inputValue>
        <Button slot="empty" on:click={() => alert("create " + inputValue)}>Create new</Button>
      </Select>
    </p>
  </div>
</div>
<Highlight code={`
  <Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} />
  <Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} selected={['mango']} />
  <Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} let:inputValue>
    <Button slot="empty" on:click={() => alert("create " + inputValue)}>Create new</Button>
  </Select>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p>Fetch options remotely</p>
    <Select filter filterPlaceholder="Search for a country" fetchOptions={fetchContent} placeholder="Select one" />
  </div>
</div>
<Highlight code={`
  <Select filter filterPlaceholder="Search for a country" fetchOptions={fetchContent} placeholder="Select one" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p>Scroll option to view</p>
    <Select options={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} placeholder="Scroll options" />
  </div>
</div>
<Highlight code={`
  <Select options={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} placeholder="Scroll options" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p>Option objects</p>
    <!-- Custom option object -->
    <Select
      options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
      labelKey="name"
    />
    <!-- Custom options -->
    <Select
      options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
      labelKey="name"
    >
      <p slot="option" let:option let:isSelected let:isFocused>
        {isFocused ? '› ' : ''}
        {option.emoji} {option.name}
        {isSelected ? '✓ ' : ''}
      </p>
    </Select>
    <!-- Custom dropdown label -->
    <Select
      options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
      labelKey="name"
    >
      <span slot="label" let:selected>{selected[0].emoji} {selected[0].name}</span>
    </Select>
    <!-- Custom dropdown trigger -->
    <Select options={['one', 'two', 'three']}>
      <div slot="trigger" let:selected style="border: 1px solid; padding: 0.25em 0.5em;">
        <IconUser /> {selected[0]}
      </div>
    </Select>
  </div>
</div>
<Highlight code={`
  <!-- Custom option object -->
  <Select
    options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
    labelKey="name"
  />

  <!-- Custom options -->
  <Select
    options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
    labelKey="name"
  >
  <p slot="option" let:option let:isSelected let:isFocused>
    {isFocused ? '› ' : ''}
    {option.emoji} {option.name}
    {isSelected ? '✓ ' : ''}
  </p>
  </Select>

  <!-- Custom dropdown label -->
  <Select
    options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
    labelKey="name"
  >
    <span slot="label" let:selected>{selected[0].emoji} {selected[0].name}</span>
  </Select>

  <!-- Custom dropdown trigger -->
  <Select options={['one', 'two', 'three']}>
    <Button slot="trigger" type="primary" icon={IconUser} let:selected>{selected[0]}</Button>
  </Select>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p>Filter list</p>
    <Select filter options={['one', 'two', 'three']} placeholder="Pick one" />
    <Select filter options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
    <Select filter placeholder="Pick one"
      options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
      labelKey="name"
    />
    <Select filter placeholder="Pick multiple"
      options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
      labelKey="name"
      multiselect
    />
  </div>
</div>
<Highlight code={`
  <Select filter options={['one', 'two', 'three']} placeholder="Pick one" />
  <Select filter options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
  <Select filter placeholder="Pick one"
    options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
    labelKey="name"
  />
  <Select filter placeholder="Pick multiple"
    options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
    labelKey="name"
    multiselect
  />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Select
      options={[{emoji: '🫥', emotion: 'Not sure'}, {emoji: '😀', emotion: 'Happy'}, {emoji: '🙁', emotion: 'Sad'}]}
      labelKey="emotion"
      let:focused let:open let:selected
    >
      <Button slot="trigger">
        How are you feeling?
        {open ? focused.emoji || selected[0].emoji : selected[0].emoji}
      </Button>
      <p slot="option" let:option>
        {option.emoji} {option.emotion}
      </p>
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
    How are you feeling?
    {open ? focused.emoji || selected[0].emoji : selected[0].emoji}
  </Button>
  <p slot="option" let:option>
    {option.emoji} {option.emotion}
  </p>
  </Select>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Select options={['one', 'two', 'three']} placeholder="Hover me" hover direction="up" align="center" iconRight={false} />
    <Select options={['one', 'two', 'three']} placeholder="Open right" direction="right" align="center" iconRight={IconChevronRight} />
  </div>
</div>
<Highlight code={`
  <Select options={['one', 'two', 'three']} placeholder="Pick one" />
  <Select options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
  <Select options={['one', 'two', 'three']} />
`} />
