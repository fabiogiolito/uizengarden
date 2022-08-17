<script>
  import { slide } from "svelte/transition";

  import Button from "$lib/Button.svelte";
  import Dropdown from "$lib/Dropdown.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Modal from "$lib/Modal.svelte";
  import Input from "$lib/Input.svelte";
  import LoadingIndicator from "$lib/LoadingIndicator.svelte";
  import Select from "$lib/Select.svelte";
  import Checkbox from "$lib/Checkbox.svelte";
  import Tooltip from "$lib/Tooltip.svelte";
  import ToggleGroup from "$lib/ToggleGroup.svelte";
  import Slider from "$lib/Slider.svelte";

  import IconCamera from "$lib/icons/IconCamera.svelte";
  import IconCopy from "$lib/icons/IconCopy.svelte";
  import IconDownloadCloud from "$lib/icons/IconDownloadCloud.svelte";
  import IconCircle from "$lib/icons/IconCircle.svelte";
  import IconChevronLeft from "$lib/icons/IconChevronLeft.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconChevronUp from "$lib/icons/IconChevronUp.svelte";
  import IconDot from "$lib/icons/IconDot.svelte";
  import IconAtSign from "$lib/icons/IconAtSign.svelte";
  import IconUser from "$lib/icons/IconUser.svelte";
  import IconPenTool from "$lib/icons/IconPenTool.svelte";
  import IconHeart from "$lib/icons/IconHeart.svelte";
  import IconBell from "$lib/icons/IconBell.svelte";
  import IconBellOff from "$lib/icons/IconBellOff.svelte";

  let modalOpen = false;
  let modalRef;

  let currentTab = 1;

  function handleOpenModal() {
    modalOpen = true;
  }

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

<div class="uizg-layout">

  <!-- ============================== -->
  <!-- Buttons -->
  <div class="uizg-component">

    <h2>Buttons</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button on:click={() => { alert('clicked')}}>button</Button>
        <Button href="#link">link</Button>
        <Button element="span">span</Button>
      </div>
      <div class="uizg-previewCode">
        {`
  <Button>Button</Button>
  <Button href="#link">Link</Button>
  <Button element="div">Div</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
      <div class="uizg-previewCode">
        {`
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button>Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra Large</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button icon={IconCircle} iconRight={IconCircle} size="xs">Extra Small</Button>
        <Button icon={IconCircle} iconRight={IconCircle} size="sm">Small</Button>
        <Button icon={IconCircle} iconRight={IconCircle}>Medium</Button>
        <Button icon={IconCircle} iconRight={IconCircle} size="lg">Large</Button>
        <Button icon={IconCircle} iconRight={IconCircle} size="xl">Extra Large</Button>
      </div>
      <div class="uizg-previewCode">
        {`
  <Button icon={IconCircle} iconRight={IconCircle} size="xs">Extra Small</Button>
  <Button icon={IconCircle} iconRight={IconCircle} size="sm">Small</Button>
  <Button icon={IconCircle} iconRight={IconCircle}>Medium</Button>
  <Button icon={IconCircle} iconRight={IconCircle} size="lg">Large</Button>
  <Button icon={IconCircle} iconRight={IconCircle} size="xl">Extra Large</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button>Regular</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="primary-translucent">Primary translucent</Button>
        <Button type="shadow">Shadow</Button>
      </div>
      <div class="uizg-previewCode">
        {`
  <Button>Regular</Button>
  <Button type="primary">Primary</Button>
  <Button type="secondary">Secondary</Button>
  <Button type="primary-translucent">Primary translucent</Button>
  <Button type="shadow">Shadow</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button async>With loading</Button>
      </div>
      <div class="uizg-previewCode">
        {`
  <Button async>With loading</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button copy="Hello" icon={IconCopy}>Copy Hello</Button>
      </div>
      <div class="uizg-previewCode">
        {`
  <Button copy="Hello" icon={IconCopy}>Copy Hello</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button
          copyFunc={() => 'Hello with Function'}
          copiedLabel="Success!"
          iconRight={IconCopy}
        >
          Copy Hello with Function
        </Button>
      </div>
      <div class="uizg-previewCode">
        {`
  <Button
    copyFunc={() => 'Hello with Function'}
    copiedLabel="Success!"
    iconRight={IconCopy}
  >
    Copy Hello with Function
  </Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button toggle>Toggle</Button>
        <Button toggle let:selected
          on:select={() => console.log('did select')}
          on:unselect={() => console.log('did unselect')}
        >
          {selected ? 'Following' : 'Follow'}
        </Button>
      </div>
      <div class="uizg-previewCode">
        {`
  <Button toggle>Toggle</Button>
  <Button toggle let:selected
    on:select={() => console.log('did select')}
    on:unselect={() => console.log('did unselect')}
  >
    {selected ? 'Following' : 'Follow'}
  </Button>
        `}
      </div>
    </div>
    
  </div>


  <!-- ============================== -->
  <!-- Dropdown -->
  <div class="uizg-component">

    <h2>Dropdown</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown>
          <Button slot="trigger" iconRight={IconChevronDown}>Dropdown</Button>
          <p>Dropdown menu content</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
  <Dropdown>
    <Button slot="trigger" iconRight={IconChevronDown}>Dropdown</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown let:open>
          <Button slot="trigger" type={open ? 'primary' : 'secondary'}>Dropdown</Button>
          <p>Dropdown menu content</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
  <Dropdown let:open>
    <Button slot="trigger" type={open ? 'primary' : 'secondary'}>Dropdown</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown direction="down" align="left">
          <Button slot="trigger">Down, Align left</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown direction="down" align="right">
          <Button slot="trigger">Down, Align right</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown direction="up" align="left">
          <Button slot="trigger">Up, align left</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown direction="up" align="right">
          <Button slot="trigger">Up, align right</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
  <Dropdown direction="down" align="left">
    <Button slot="trigger">Down, Align left</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown direction="down" align="right">
    <Button slot="trigger">Down, Align right</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown direction="up" align="left">
    <Button slot="trigger">Up, align left</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown direction="up" align="right">
    <Button slot="trigger">Up, align right</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown direction="right" align="top">
          <Button slot="trigger">Right, Align top</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown direction="right" align="center">
          <Button slot="trigger">Right, Align center</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown direction="right" align="bottom">
          <Button slot="trigger">Right, align bottom</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
  <Dropdown direction="right" align="top">
    <Button slot="trigger">Right, Align top</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown direction="right" align="center">
    <Button slot="trigger">Right, Align center</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown direction="right" align="bottom">
    <Button slot="trigger">Right, align bottom</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown direction="left" align="top">
          <Button slot="trigger">Left, Align top</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown direction="left" align="center">
          <Button slot="trigger">Left, Align center</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown direction="left" align="bottom">
          <Button slot="trigger">Left, align bottom</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
  <Dropdown direction="left" align="top">
    <Button slot="trigger">Left, Align top</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown direction="left" align="center">
    <Button slot="trigger">Left, Align center</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown direction="left" align="bottom">
    <Button slot="trigger">Left, align bottom</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown over direction="down" align="left">
          <Button slot="trigger">Over down</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown over direction="up" align="left">
          <Button slot="trigger">Over up</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown over direction="right" align="top">
          <Button slot="trigger">Over right</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
        <Dropdown over direction="left" align="top">
          <Button slot="trigger">Over left</Button>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
          <p>Dropdown menu content</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
  <Dropdown over direction="down" align="left">
    <Button slot="trigger">Over down</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown over direction="up" align="left">
    <Button slot="trigger">Over up</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown over direction="right" align="top">
    <Button slot="trigger">Over right</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
  <Dropdown over direction="left" align="top">
    <Button slot="trigger">Over left</Button>
    <p>Dropdown menu content</p>
  </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown hover>
          <Button slot="trigger">Hover me</Button>
          <p>Hover card</p>
        </Dropdown>
        <Dropdown hover hoverDelay={1000}>
          <Button slot="trigger">Hover me for 1s</Button>
          <p>Hover card</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
  <Dropdown hover>
    <Button slot="trigger">Hover me</Button>
    <p>Hover card</p>
  </Dropdown>
  <Dropdown hover hoverDelay={1000}>
    <Button slot="trigger">Hover me for 1s</Button>
    <p>Hover card</p>
  </Dropdown>
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- Collapsible -->
  <div class="uizg-component">

    <h2>Collapsible</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Collapsible title="Hello">
          <p>World</p>
        </Collapsible>
      </div>
      <div class="uizg-previewCode">
        {`
  <Collapsible title="Hello">
    <p>World</p>
  </Collapsible>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Collapsible let:collapsed>
          <span slot="title">Click me to {collapsed ? "open" : "close"}</span>
          <Button size="xs" slot="header">Action</Button>
          <p>Hello</p>
        </Collapsible>
      </div>
      <div class="uizg-previewCode">
        {`
  <Collapsible let:collapsed>
    <span slot="title">Click me to {collapsed ? "open" : "close"}</span>
    <Button size="xs" slot="header">Action</Button>
    <p>Hello</p>
  </Collapsible>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Collapsible collapsed let:collapsed let:toggleCollapsed>
          <div slot="trigger">
            {#if collapsed}
              <div transition:slide>
                <Button size="xs" on:click={toggleCollapsed}>2 more</Button>
              </div>
            {/if}
          </div>
          <p>Hello one</p>
          <p>Hello two</p>
        </Collapsible>
      </div>
      <div class="uizg-previewCode">
        {`
  <Collapsible collapsed let:collapsed let:toggleCollapsed>
    <div slot="trigger">
      {#if collapsed}
        <div transition:slide>
          <Button size="xs" on:click={toggleCollapsed}>2 more</Button>
        </div>
      {/if}
    </div>
    <p>Hello one</p>
    <p>Hello two</p>
  </Collapsible>
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- Modal -->
  <div class="uizg-component">

    <h2>Modal</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Modal let:openModal let:closeModal>
          <Button slot="trigger" on:click={openModal}>
            Open modal with trigger slot
          </Button>
          <p>Content</p>
          <Button on:click={closeModal}>Close modal</Button>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
  <Modal let:openModal let:closeModal>
    <Button slot="trigger" on:click={openModal}>
      Open modal with trigger slot
    </Button>
    <p>Content</p>
    <Button on:click={closeModal}>Close modal</Button>
  </Modal>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button on:click={handleOpenModal}>Open modal with external state</Button>
        <Modal bind:open={modalOpen} let:closeModal>
          <p>Content</p>
          <Button on:click={closeModal}>Close modal</Button>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
  <script>
    let modalOpen = false;
    function handleOpenModal() { modalOpen = true; }
  </script>
  <Button on:click={handleOpenModal}>Open modal with external state</Button>
  <Modal bind:open={modalOpen} let:closeModal>
    <p>Content</p>
    <Button on:click={closeModal}>Close modal</Button>
  </Modal>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button on:click={modalRef.openModal}>Open modal with ref</Button>
        <Modal bind:this={modalRef}>
          <p>Content</p>
          <Button on:click={modalRef.closeModal}>Close modal</Button>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
  <script>
    let modalRef;
  </script>
  <Button on:click={modalRef.openModal}>Open modal</Button>
  <Modal bind:this={modalRef}>
    <p>Content</p>
    <Button on:click={modalRef.closeModal}>Close modal</Button>
  </Modal>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Modal title="My modal" let:openModal >
          <Button slot="trigger" on:click={openModal}>
            Modal with title
          </Button>
          <p>Content</p>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
  <Modal title="My modal" let:openModal >
    <Button slot="trigger" on:click={openModal}>
      Modal with title
    </Button>
    <p>Content</p>
  </Modal>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Modal let:openModal let:closeModal>
          <Button slot="trigger" on:click={openModal}>
            Modal with header and footer
          </Button>
          <div slot="header">My modal</div>
          <p>Content</p>
          <Button slot="footer" on:click={closeModal}>Close modal</Button>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
  <Modal let:openModal let:closeModal>
    <Button slot="trigger" on:click={openModal}>
      Modal with header and footer
    </Button>
    <div slot="header">My modal</div>
    <p>Content</p>
    <Button slot="footer" on:click={closeModal}>Close modal</Button>
  </Modal>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Modal dialog title="Are you sure?" let:openModal let:closeModal>
          <Button slot="trigger" on:click={openModal}>
            Modal dialog
          </Button>
          <div slot="footer">
            <Button on:click={() => { console.log('action'); closeModal(); }}>Yes</Button>
            <Button on:click={closeModal}>No</Button>
          </div>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
  <Modal dialog title="Are you sure?" let:openModal let:closeModal>
    <Button slot="trigger" on:click={openModal}>
      Modal dialog
    </Button>
    <div slot="footer">
      <Button on:click={() => { console.log('action'); closeModal(); }}>Yes</Button>
      <Button on:click={closeModal}>No</Button>
    </div>
  </Modal>
        `}
      </div>
    </div>

  </div>


  <!-- ============================== -->
  <!-- Input -->
  <div class="uizg-component">

    <h2>Input</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Input value="Hello world" />
      </div>
      <div class="uizg-previewCode">
        {`
  <Input value="Hello world" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Input prepend="$" append=".00" placeholder="value" />
      </div>
      <div class="uizg-previewCode">
        {`
  <Input prepend="$" append=".00" placeholder="value" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Input placeholder="username">
          <IconAtSign slot="prepend" />
          <Button slot="append">Create account</Button>
        </Input>
      </div>
      <div class="uizg-previewCode">
        {`
  <Input placeholder="username">
    <IconAtSign slot="prepend" />
    <Button slot="append">Create account</Button>
  </Input>
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- Icons -->
  <div class="uizg-component">

    <h2>Feather Icons</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <IconCamera />
        <IconCopy />
        <IconDownloadCloud />
      </div>
      <div class="uizg-previewCode">
        {`
  <IconCamera />
  <IconCopy />
  <IconDownloadCloud />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <IconCopy size="sm" />
        <IconCopy />
        <IconCopy size="lg" />
      </div>
      <div class="uizg-previewCode">
        {`
  <IconDownloadCloud size="sm" />
  <IconDownloadCloud />
  <IconDownloadCloud size="lg" />
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- Loading Indicator -->
  <div class="uizg-component">

    <h2>Loading Indicator</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <LoadingIndicator />
      </div>
      <div class="uizg-previewCode">
        {`
  <LoadingIndicator />
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- Select -->
  <div class="uizg-component">

    <h2>Select</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Select options={['one', 'two', 'three']} placeholder="Pick one" />
        <Select options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
        <Select options={['one', 'two', 'three']} />
        <Select options={['Recent', 'Popular', 'Trending']} title="Sort by" />
        <Select options={['Recent', 'Popular', 'Trending']} title="Sort by" selected="Recent" />
      </div>
      <div class="uizg-previewCode">
        {`
  <Select options={['one', 'two', 'three']} placeholder="Pick one" />
  <Select options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
  <Select options={['one', 'two', 'three']} />
  <Select options={['Recent', 'Popular', 'Trending']} title="Sort by" />
  <Select options={['Recent', 'Popular', 'Trending']} title="Sort by" selected="Recent" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <p>Input trigger</p>
        <p><Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} /></p>
        <p><Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} selected={['mango']} /></p>
        <p>
          <Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} let:inputValue>
            <button slot="empty" on:click={() => alert("create " + inputValue)}>Create new</button>
          </Select>
        </p>
      </div>
      <div class="uizg-previewCode">
        {`
  <Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} />
  <Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} selected={['mango']} />
  <Select input placeholder="Favorite fruit" options={['apple', 'banana', 'orange', 'mango']} let:inputValue>
    <button slot="empty" on:click={() => alert("create " + inputValue)}>Create new</button>
  </Select>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <p>Fetch options remotely</p>
        <Select filter filterPlaceholder="Search for a country" fetchOptions={fetchContent} placeholder="Select one" />
      </div>
      <div class="uizg-previewCode">
        {`
  <Select filter filterPlaceholder="Search for a country" fetchOptions={fetchContent} placeholder="Select one" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <p>Scroll option to view</p>
        <Select options={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} placeholder="Scroll options" />
      </div>
      <div class="uizg-previewCode">
        {`
  <Select options={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} placeholder="Scroll options" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
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
      <div class="uizg-previewCode">
        {`
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
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
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
      <div class="uizg-previewCode">
        {`
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
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
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
      <div class="uizg-previewCode">
        {`
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
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Select options={['one', 'two', 'three']} placeholder="Hover me" hover direction="up" align="center" iconRight={false} />
        <Select options={['one', 'two', 'three']} placeholder="Open right" direction="right" align="center" iconRight={IconChevronRight} />
      </div>
      <div class="uizg-previewCode">
        {`
  <Select options={['one', 'two', 'three']} placeholder="Pick one" />
  <Select options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
  <Select options={['one', 'two', 'three']} />
        `}
      </div>
    </div>

  </div>


  <!-- ============================== -->
  <!-- Checkbox -->
  <div class="uizg-component">

    <h2>Checkbox</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox />
        <Checkbox type="radio" />
        <Checkbox type="switch" />
      </div>
      <div class="uizg-previewCode">
        {`
  <Checkbox />
  <Checkbox type="radio" />
  <Checkbox type="switch" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox label="Checkbox label" />
      </div>
      <div class="uizg-previewCode">
        {`
  <Checkbox label="Checkbox label" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox type="switch">
          <p>Custom label</p>
          <small>With slot</small>
        </Checkbox>
      </div>
      <div class="uizg-previewCode">
        {`
  <Checkbox type="switch">
    <p>Custom label</p>
    <small>With slot</small>
  </Checkbox>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox label="Custom icon" icon={IconPenTool} checked />
        <Checkbox label="Custom icon" icon={IconPenTool} checked type="radio" />
      </div>
      <div class="uizg-previewCode">
        {`
  <Checkbox label="Custom icon" icon={IconPenTool} checked />
  <Checkbox label="Custom icon" icon={IconPenTool} checked type="radio" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox label="Custom icon slot" checked>
          <svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
        </Checkbox>
        <Checkbox label="Custom icon slot" checked type="radio">
          <svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
        </Checkbox>
        <Checkbox label="Custom icon slot" checked type="switch">
          <svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
        </Checkbox>
      </div>
      <div class="uizg-previewCode">
        {`
  <Checkbox label="Custom icon slot" checked>
    <svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
  </Checkbox>
  <Checkbox label="Custom icon slot" checked type="radio">
    <svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
  </Checkbox>
  <Checkbox label="Custom icon slot" checked type="switch">
    <svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
  </Checkbox>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox label="Custom icon slot" checked>
          <span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
        </Checkbox>
        <Checkbox label="Custom icon slot" checked type="radio">
          <span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
        </Checkbox>
        <Checkbox label="Custom icon slot" checked type="switch">
          <span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
        </Checkbox>
      </div>
      <div class="uizg-previewCode">
        {`
  <Checkbox label="Custom icon slot" checked>
    <span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
  </Checkbox>
  <Checkbox label="Custom icon slot" checked type="radio">
    <span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
  </Checkbox>
  <Checkbox label="Custom icon slot" checked type="switch">
    <span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
  </Checkbox>
        `}
      </div>
    </div>

  </div>


  <!-- ============================== -->
  <!-- Tooltip -->
  <div class="uizg-component">

    <h2>Tooltip</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip text="Hello!">
          Hover me
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
  <Tooltip text="Hello!">
    Hover me
  </Tooltip>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip>
          <IconHeart slot="content" />
          Hover me
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
  <Tooltip>
    <IconHeart slot="content" />
    Hover me
  </Tooltip>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip direction="up">
          <Button>Tooltip up</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="right">
          <Button>Tooltip right</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="down">
          <Button>Tooltip down</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="left">
          <Button>Tooltip left</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
  <Tooltip direction="up">
    <Button>Tooltip up</Button>
    <div slot="content">...</div>
  </Tooltip>
  <Tooltip direction="right">
    <Button>Tooltip right</Button>
    <div slot="content">...</div>
  </Tooltip>
  <Tooltip direction="down">
    <Button>Tooltip down</Button>
    <div slot="content">...</div>
  </Tooltip>
  <Tooltip direction="left">
    <Button>Tooltip left</Button>
    <div slot="content">...</div>
  </Tooltip>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip direction="right" align="center">
          <Button>Vertical Align center</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="right" align="top">
          <Button>Vertical Align top</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="right" align="bottom">
          <Button>Vertical Align bottom</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
  <Tooltip direction="right" align="center">
    <Button>Vertical Align center</Button>
    <div slot="content">...</div>
  </Tooltip>
  <Tooltip direction="right" align="top">
    <Button>Vertical Align top</Button>
    <div slot="content">...</div>
  </Tooltip>
  <Tooltip direction="right" align="bottom">
    <Button>Vertical Align bottom</Button>
    <div slot="content">...</div>
  </Tooltip>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip align="left">
          <Button>Horizontal align left</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip align="center">
          <Button>Horizontal align center</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip align="right">
          <Button>Horizontal align right</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
  <Tooltip align="left">
    <Button>Horizontal align left</Button>
    <div slot="content">...</div>
  </Tooltip>
  <Tooltip align="center">
    <Button>Horizontal align center</Button>
    <div slot="content">...</div>
  </Tooltip>
  <Tooltip align="right">
    <Button>Horizontal align right</Button>
    <div slot="content">...</div>
  </Tooltip>
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- ToggleGroup -->
  <div class="uizg-component">

    <h2>ToggleGroup</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup let:current let:setCurrent>
          <p on:click={() => setCurrent(1)}>Item 1 {current == 1 ? '(selected)' : ''}</p>
          <p on:click={() => setCurrent(2)}>Item 2 {current == 2 ? '(selected)' : ''}</p>
          <p on:click={() => setCurrent(3)}>Item 3 {current == 3 ? '(selected)' : ''}</p>
        </ToggleGroup>
      </div>
      <div class="uizg-previewCode">
        {`
  <ToggleGroup let:current let:setCurrent>
    <p on:click={() => setCurrent(1)}>Item 1 {current == 1 ? '(selected)' : ''}</p>
    <p on:click={() => setCurrent(2)}>Item 2 {current == 2 ? '(selected)' : ''}</p>
    <p on:click={() => setCurrent(3)}>Item 3 {current == 3 ? '(selected)' : ''}</p>
  </ToggleGroup>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup current={2} let:current let:setCurrent>
          <Button value={1} selected={current == 1} on:click={setCurrent}>Tab 1</Button>
          <Button value={2} selected={current == 2} on:click={setCurrent}>Tab 2</Button>
          <Button value={3} selected={current == 3} on:click={setCurrent}>Tab 3</Button>

          <!-- Content logic here -->
          <p>Current Tab is {current}</p>
        </ToggleGroup>
      </div>
      <div class="uizg-previewCode">
        {`
  <ToggleGroup current={2} let:current let:setCurrent>
    <Button value={1} selected={current == 1} on:click={setCurrent}>Tab 1</Button>
    <Button value={2} selected={current == 2} on:click={setCurrent}>Tab 2</Button>
    <Button value={3} selected={current == 3} on:click={setCurrent}>Tab 3</Button>

    <!-- Content logic here -->
    <p>Current Tab is {current}</p>
  </ToggleGroup>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup bind:current={currentTab} let:current let:setCurrent>
          <Button value={1} selected={current == 1} on:click={setCurrent}>Tab 1</Button>
          <Button value={2} selected={current == 2} on:click={setCurrent}>Tab 2</Button>
          <Button value={3} selected={current == 3} on:click={setCurrent}>Tab 3</Button>
        </ToggleGroup>
        <p>Current Tab with external state is {currentTab}</p>
      </div>
      <div class="uizg-previewCode">
        {`
  <script>
    let currentTab = 1;
  </script>
  <ToggleGroup bind:current={currentTab} let:current let:setCurrent>
    <Button value={1} selected={current == 1} on:click={setCurrent}>Tab 1</Button>
    <Button value={2} selected={current == 2} on:click={setCurrent}>Tab 2</Button>
    <Button value={3} selected={current == 3} on:click={setCurrent}>Tab 3</Button>
  </ToggleGroup>
  <p>Current Tab is {currentTab}</p>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup current={'Item 2'} let:current let:setCurrent>
          {#each ['Item 1', 'Item 2', 'Item 3'] as option}
            <div><Checkbox type="radio" value={option} checked={current == option} on:check={setCurrent} label={option} /></div>
          {/each}
        </ToggleGroup>
      </div>
      <div class="uizg-previewCode">
        {`
  <ToggleGroup current={'Item 2'} let:current let:setCurrent>
    {#each ['Item 1', 'Item 2', 'Item 3'] as option}
      <div><Checkbox value={option} checked={current == option} on:check={setCurrent} label={option} /></div>
    {/each}
  </ToggleGroup>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup current={1} let:current let:setCurrent>
          <Collapsible value={1} collapsed={current != 1} on:expand={setCurrent} title="Item 1">Hello World!</Collapsible>
          <Collapsible value={2} collapsed={current != 2} on:expand={setCurrent} title="Item 2">Hello World!</Collapsible>
          <Collapsible value={3} collapsed={current != 3} on:expand={setCurrent} title="Item 3">Hello World!</Collapsible>
        </ToggleGroup>
      </div>
      <div class="uizg-previewCode">
        {`
  <ToggleGroup current={1} let:current let:setCurrent>
    <Collapsible value={1} collapsed={current != 1} on:expand={setCurrent} title="Item 1">...</Collapsible>
    <Collapsible value={2} collapsed={current != 2} on:expand={setCurrent} title="Item 2">...</Collapsible>
    <Collapsible value={3} collapsed={current != 3} on:expand={setCurrent} title="Item 3">...</Collapsible>
  </ToggleGroup>
        `}
      </div>
    </div>

  </div>

  
  <!-- ============================== -->
  <!-- Slider -->
  <div class="uizg-component">

    <h2>Slider</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Slider />
        <Slider value={20} decimals={2} knobLabels />
        <Slider step={20} min={40} max={200} stepLabels />
        <Slider range valueStart={20} value={70} labels />
        <Slider min={0} max={200} minValue={40} maxValue={160} valueStart={40} step={20} labels />
      </div>
      <div class="uizg-previewCode">
        {`
  <Slider />
  <Slider value={20} decimals={2} knobLabels />
  <Slider step={20} min={40} max={200} stepLabels />
  <Slider range valueStart={20} value={70} labels />
  <Slider min={0} max={200} minValue={40} maxValue={160} valueStart={40} step={20} labels />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Slider range icon={IconChevronLeft} iconStart={IconChevronRight} iconFocused={IconDot} iconStartFocused={IconDot} />
        <Slider step="12.5" decimals="1" labelMin="☹️" labelMax="😁" let:value>
          <span slot="icon" style="font-size: 2em;">
            {["☹️", "🙁", "😔", "😒", "😌", "🙂", "😀", "😄", "😁"][value * 8 / 100]}
          </span>
        </Slider>
        <Slider let:min let:max let:value>
          <span slot="labelMin">🐶 {value == min ? 'woof' : ''}</span>
          <span slot="labelMax">{value == max ? 'meow' : ''} 🐱</span>
        </Slider>
      </div>
      <div class="uizg-previewCode">
        {`
  <Slider range icon={IconChevronLeft} iconStart={IconChevronRight} iconFocused={IconDot} iconStartFocused={IconDot} />
  <Slider step="12.5" decimals="1" labelMin="☹️" labelMax="😁" let:value>
    <span slot="icon" style="font-size: 2em;">
      {["☹️", "🙁", "😔", "😒", "😌", "🙂", "😀", "😄", "😁"][value * 8 / 100]}
    </span>
  </Slider>
  <Slider let:min let:max let:value>
    <span slot="labelMin">🐶 {value == min ? 'woof' : ''}</span>
    <span slot="labelMax">{value == max ? 'meow' : ''} 🐱</span>
  </Slider>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Slider range
          on:changeStart={(e) => console.log('Changed Start Value', e.detail)}
          on:changeEnd={(e) => console.log('Changed End Value', e.detail)}
        />
      </div>
      <div class="uizg-previewCode">
        {`
  <Slider range
    on:changeStart={(e) => console.log('Changed Start Value', e.detail)}
    on:changeEnd={(e) => console.log('Changed End Value', e.detail)}
  />
        `}
      </div>
    </div>

  </div>


</div>


<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
