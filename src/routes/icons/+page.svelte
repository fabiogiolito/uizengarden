<script>
  import { onMount } from "svelte";

  import Highlight from "$lib/Highlight.svelte";
  import Tooltip from "$lib/Tooltip.svelte";

  import IconActivity from "$lib/icons/IconActivity.svelte";
  import IconAirplay from "$lib/icons/IconAirplay.svelte";
  import IconAlertCircle from "$lib/icons/IconAlertCircle.svelte";
  import IconAlertOctagon from "$lib/icons/IconAlertOctagon.svelte";
  import IconAlertTriangle from "$lib/icons/IconAlertTriangle.svelte";
  import IconAlignCenter from "$lib/icons/IconAlignCenter.svelte";
  import IconAlignJustify from "$lib/icons/IconAlignJustify.svelte";
  import IconAlignLeft from "$lib/icons/IconAlignLeft.svelte";
  import IconAlignRight from "$lib/icons/IconAlignRight.svelte";
  import IconAnchor from "$lib/icons/IconAnchor.svelte";
  import IconAperture from "$lib/icons/IconAperture.svelte";
  import IconArchive from "$lib/icons/IconArchive.svelte";
  import IconArrowDown from "$lib/icons/IconArrowDown.svelte";
  import IconArrowDownCircle from "$lib/icons/IconArrowDownCircle.svelte";
  import IconArrowDownLeft from "$lib/icons/IconArrowDownLeft.svelte";
  import IconArrowDownRight from "$lib/icons/IconArrowDownRight.svelte";
  import IconArrowLeft from "$lib/icons/IconArrowLeft.svelte";
  import IconArrowLeftCircle from "$lib/icons/IconArrowLeftCircle.svelte";
  import IconArrowRight from "$lib/icons/IconArrowRight.svelte";
  import IconArrowRightCircle from "$lib/icons/IconArrowRightCircle.svelte";
  import IconArrowUp from "$lib/icons/IconArrowUp.svelte";
  import IconArrowUpCircle from "$lib/icons/IconArrowUpCircle.svelte";
  import IconArrowUpLeft from "$lib/icons/IconArrowUpLeft.svelte";
  import IconArrowUpRight from "$lib/icons/IconArrowUpRight.svelte";
  import IconAtSign from "$lib/icons/IconAtSign.svelte";
  import IconAward from "$lib/icons/IconAward.svelte";
  import IconBarChart from "$lib/icons/IconBarChart.svelte";
  import IconBarChart2 from "$lib/icons/IconBarChart2.svelte";
  import IconBattery from "$lib/icons/IconBattery.svelte";
  import IconBatteryCharging from "$lib/icons/IconBatteryCharging.svelte";
  import IconBell from "$lib/icons/IconBell.svelte";
  import IconBellOff from "$lib/icons/IconBellOff.svelte";
  import IconBluetooth from "$lib/icons/IconBluetooth.svelte";
  import IconBold from "$lib/icons/IconBold.svelte";
  import IconBook from "$lib/icons/IconBook.svelte";
  import IconBookOpen from "$lib/icons/IconBookOpen.svelte";
  import IconBookmark from "$lib/icons/IconBookmark.svelte";
  import IconBox from "$lib/icons/IconBox.svelte";
  import IconBriefcase from "$lib/icons/IconBriefcase.svelte";
  import IconCalendar from "$lib/icons/IconCalendar.svelte";
  import IconCamera from "$lib/icons/IconCamera.svelte";
  import IconCameraOff from "$lib/icons/IconCameraOff.svelte";
  import IconCast from "$lib/icons/IconCast.svelte";
  import IconCheck from "$lib/icons/IconCheck.svelte";
  import IconCheckCircle from "$lib/icons/IconCheckCircle.svelte";
  import IconCheckSquare from "$lib/icons/IconCheckSquare.svelte";
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconChevronLeft from "$lib/icons/IconChevronLeft.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";
  import IconChevronUp from "$lib/icons/IconChevronUp.svelte";
  import IconChevronsDown from "$lib/icons/IconChevronsDown.svelte";
  import IconChevronsLeft from "$lib/icons/IconChevronsLeft.svelte";
  import IconChevronsRight from "$lib/icons/IconChevronsRight.svelte";
  import IconChevronsUp from "$lib/icons/IconChevronsUp.svelte";
  import IconChrome from "$lib/icons/IconChrome.svelte";
  import IconCircle from "$lib/icons/IconCircle.svelte";
  import IconClipboard from "$lib/icons/IconClipboard.svelte";
  import IconClock from "$lib/icons/IconClock.svelte";
  import IconCloud from "$lib/icons/IconCloud.svelte";
  import IconCloudDrizzle from "$lib/icons/IconCloudDrizzle.svelte";
  import IconCloudLightning from "$lib/icons/IconCloudLightning.svelte";
  import IconCloudOff from "$lib/icons/IconCloudOff.svelte";
  import IconCloudRain from "$lib/icons/IconCloudRain.svelte";
  import IconCloudSnow from "$lib/icons/IconCloudSnow.svelte";
  import IconCode from "$lib/icons/IconCode.svelte";
  import IconCodepen from "$lib/icons/IconCodepen.svelte";
  import IconCodesandbox from "$lib/icons/IconCodesandbox.svelte";
  import IconCoffee from "$lib/icons/IconCoffee.svelte";
  import IconColumns from "$lib/icons/IconColumns.svelte";
  import IconCommand from "$lib/icons/IconCommand.svelte";
  import IconCompass from "$lib/icons/IconCompass.svelte";
  import IconCopy from "$lib/icons/IconCopy.svelte";
  import IconCornerDownLeft from "$lib/icons/IconCornerDownLeft.svelte";
  import IconCornerDownRight from "$lib/icons/IconCornerDownRight.svelte";
  import IconCornerLeftDown from "$lib/icons/IconCornerLeftDown.svelte";
  import IconCornerLeftUp from "$lib/icons/IconCornerLeftUp.svelte";
  import IconCornerRightDown from "$lib/icons/IconCornerRightDown.svelte";
  import IconCornerRightUp from "$lib/icons/IconCornerRightUp.svelte";
  import IconCornerUpLeft from "$lib/icons/IconCornerUpLeft.svelte";
  import IconCornerUpRight from "$lib/icons/IconCornerUpRight.svelte";
  import IconCpu from "$lib/icons/IconCpu.svelte";
  import IconCreditCard from "$lib/icons/IconCreditCard.svelte";
  import IconCrop from "$lib/icons/IconCrop.svelte";
  import IconCrosshair from "$lib/icons/IconCrosshair.svelte";
  import IconDatabase from "$lib/icons/IconDatabase.svelte";
  import IconDelete from "$lib/icons/IconDelete.svelte";
  import IconDisc from "$lib/icons/IconDisc.svelte";
  import IconDivide from "$lib/icons/IconDivide.svelte";
  import IconDivideCircle from "$lib/icons/IconDivideCircle.svelte";
  import IconDivideSquare from "$lib/icons/IconDivideSquare.svelte";
  import IconDollarSign from "$lib/icons/IconDollarSign.svelte";
  import IconDot from "$lib/icons/IconDot.svelte";
  import IconDownload from "$lib/icons/IconDownload.svelte";
  import IconDownloadCloud from "$lib/icons/IconDownloadCloud.svelte";
  import IconDribbble from "$lib/icons/IconDribbble.svelte";
  import IconDroplet from "$lib/icons/IconDroplet.svelte";
  import IconEdit from "$lib/icons/IconEdit.svelte";
  import IconEdit2 from "$lib/icons/IconEdit2.svelte";
  import IconEdit3 from "$lib/icons/IconEdit3.svelte";
  import IconExternalLink from "$lib/icons/IconExternalLink.svelte";
  import IconEye from "$lib/icons/IconEye.svelte";
  import IconEyeOff from "$lib/icons/IconEyeOff.svelte";
  import IconFacebook from "$lib/icons/IconFacebook.svelte";
  import IconFastForward from "$lib/icons/IconFastForward.svelte";
  import IconFeather from "$lib/icons/IconFeather.svelte";
  import IconFigma from "$lib/icons/IconFigma.svelte";
  import IconFile from "$lib/icons/IconFile.svelte";
  import IconFileMinus from "$lib/icons/IconFileMinus.svelte";
  import IconFilePlus from "$lib/icons/IconFilePlus.svelte";
  import IconFileText from "$lib/icons/IconFileText.svelte";
  import IconFilm from "$lib/icons/IconFilm.svelte";
  import IconFilter from "$lib/icons/IconFilter.svelte";
  import IconFlag from "$lib/icons/IconFlag.svelte";
  import IconFolder from "$lib/icons/IconFolder.svelte";
  import IconFolderMinus from "$lib/icons/IconFolderMinus.svelte";
  import IconFolderPlus from "$lib/icons/IconFolderPlus.svelte";
  import IconFramer from "$lib/icons/IconFramer.svelte";
  import IconFrown from "$lib/icons/IconFrown.svelte";
  import IconGift from "$lib/icons/IconGift.svelte";
  import IconGitBranch from "$lib/icons/IconGitBranch.svelte";
  import IconGitCommit from "$lib/icons/IconGitCommit.svelte";
  import IconGitMerge from "$lib/icons/IconGitMerge.svelte";
  import IconGitPullRequest from "$lib/icons/IconGitPullRequest.svelte";
  import IconGithub from "$lib/icons/IconGithub.svelte";
  import IconGitlab from "$lib/icons/IconGitlab.svelte";
  import IconGlobe from "$lib/icons/IconGlobe.svelte";
  import IconGrid from "$lib/icons/IconGrid.svelte";
  import IconHardDrive from "$lib/icons/IconHardDrive.svelte";
  import IconHash from "$lib/icons/IconHash.svelte";
  import IconHeadphones from "$lib/icons/IconHeadphones.svelte";
  import IconHeart from "$lib/icons/IconHeart.svelte";
  import IconHelpCircle from "$lib/icons/IconHelpCircle.svelte";
  import IconHexagon from "$lib/icons/IconHexagon.svelte";
  import IconHome from "$lib/icons/IconHome.svelte";
  import IconImage from "$lib/icons/IconImage.svelte";
  import IconInbox from "$lib/icons/IconInbox.svelte";
  import IconInfo from "$lib/icons/IconInfo.svelte";
  import IconInstagram from "$lib/icons/IconInstagram.svelte";
  import IconItalic from "$lib/icons/IconItalic.svelte";
  import IconKey from "$lib/icons/IconKey.svelte";
  import IconLayers from "$lib/icons/IconLayers.svelte";
  import IconLayout from "$lib/icons/IconLayout.svelte";
  import IconLifeBuoy from "$lib/icons/IconLifeBuoy.svelte";
  import IconLink from "$lib/icons/IconLink.svelte";
  import IconLink2 from "$lib/icons/IconLink2.svelte";
  import IconLinkedin from "$lib/icons/IconLinkedin.svelte";
  import IconList from "$lib/icons/IconList.svelte";
  import IconLoader from "$lib/icons/IconLoader.svelte";
  import IconLock from "$lib/icons/IconLock.svelte";
  import IconLogIn from "$lib/icons/IconLogIn.svelte";
  import IconLogOut from "$lib/icons/IconLogOut.svelte";
  import IconMail from "$lib/icons/IconMail.svelte";
  import IconMap from "$lib/icons/IconMap.svelte";
  import IconMapPin from "$lib/icons/IconMapPin.svelte";
  import IconMaximize from "$lib/icons/IconMaximize.svelte";
  import IconMaximize2 from "$lib/icons/IconMaximize2.svelte";
  import IconMeh from "$lib/icons/IconMeh.svelte";
  import IconMenu from "$lib/icons/IconMenu.svelte";
  import IconMessageCircle from "$lib/icons/IconMessageCircle.svelte";
  import IconMessageSquare from "$lib/icons/IconMessageSquare.svelte";
  import IconMic from "$lib/icons/IconMic.svelte";
  import IconMicOff from "$lib/icons/IconMicOff.svelte";
  import IconMinimize from "$lib/icons/IconMinimize.svelte";
  import IconMinimize2 from "$lib/icons/IconMinimize2.svelte";
  import IconMinus from "$lib/icons/IconMinus.svelte";
  import IconMinusCircle from "$lib/icons/IconMinusCircle.svelte";
  import IconMinusSquare from "$lib/icons/IconMinusSquare.svelte";
  import IconMonitor from "$lib/icons/IconMonitor.svelte";
  import IconMoon from "$lib/icons/IconMoon.svelte";
  import IconMoreHorizontal from "$lib/icons/IconMoreHorizontal.svelte";
  import IconMoreVertical from "$lib/icons/IconMoreVertical.svelte";
  import IconMousePointer from "$lib/icons/IconMousePointer.svelte";
  import IconMove from "$lib/icons/IconMove.svelte";
  import IconMusic from "$lib/icons/IconMusic.svelte";
  import IconNavigation from "$lib/icons/IconNavigation.svelte";
  import IconNavigation2 from "$lib/icons/IconNavigation2.svelte";
  import IconOctagon from "$lib/icons/IconOctagon.svelte";
  import IconPackage from "$lib/icons/IconPackage.svelte";
  import IconPaperclip from "$lib/icons/IconPaperclip.svelte";
  import IconPause from "$lib/icons/IconPause.svelte";
  import IconPauseCircle from "$lib/icons/IconPauseCircle.svelte";
  import IconPenTool from "$lib/icons/IconPenTool.svelte";
  import IconPercent from "$lib/icons/IconPercent.svelte";
  import IconPhone from "$lib/icons/IconPhone.svelte";
  import IconPhoneCall from "$lib/icons/IconPhoneCall.svelte";
  import IconPhoneForwarded from "$lib/icons/IconPhoneForwarded.svelte";
  import IconPhoneIncoming from "$lib/icons/IconPhoneIncoming.svelte";
  import IconPhoneMissed from "$lib/icons/IconPhoneMissed.svelte";
  import IconPhoneOff from "$lib/icons/IconPhoneOff.svelte";
  import IconPhoneOutgoing from "$lib/icons/IconPhoneOutgoing.svelte";
  import IconPieChart from "$lib/icons/IconPieChart.svelte";
  import IconPlay from "$lib/icons/IconPlay.svelte";
  import IconPlayCircle from "$lib/icons/IconPlayCircle.svelte";
  import IconPlus from "$lib/icons/IconPlus.svelte";
  import IconPlusCircle from "$lib/icons/IconPlusCircle.svelte";
  import IconPlusSquare from "$lib/icons/IconPlusSquare.svelte";
  import IconPocket from "$lib/icons/IconPocket.svelte";
  import IconPower from "$lib/icons/IconPower.svelte";
  import IconPrinter from "$lib/icons/IconPrinter.svelte";
  import IconRadio from "$lib/icons/IconRadio.svelte";
  import IconRefreshCcw from "$lib/icons/IconRefreshCcw.svelte";
  import IconRefreshCw from "$lib/icons/IconRefreshCw.svelte";
  import IconRepeat from "$lib/icons/IconRepeat.svelte";
  import IconRewind from "$lib/icons/IconRewind.svelte";
  import IconRotateCcw from "$lib/icons/IconRotateCcw.svelte";
  import IconRotateCw from "$lib/icons/IconRotateCw.svelte";
  import IconRss from "$lib/icons/IconRss.svelte";
  import IconSave from "$lib/icons/IconSave.svelte";
  import IconScissors from "$lib/icons/IconScissors.svelte";
  import IconSearch from "$lib/icons/IconSearch.svelte";
  import IconSend from "$lib/icons/IconSend.svelte";
  import IconServer from "$lib/icons/IconServer.svelte";
  import IconSettings from "$lib/icons/IconSettings.svelte";
  import IconShare from "$lib/icons/IconShare.svelte";
  import IconShare2 from "$lib/icons/IconShare2.svelte";
  import IconShield from "$lib/icons/IconShield.svelte";
  import IconShieldOff from "$lib/icons/IconShieldOff.svelte";
  import IconShoppingBag from "$lib/icons/IconShoppingBag.svelte";
  import IconShoppingCart from "$lib/icons/IconShoppingCart.svelte";
  import IconShuffle from "$lib/icons/IconShuffle.svelte";
  import IconSidebar from "$lib/icons/IconSidebar.svelte";
  import IconSkipBack from "$lib/icons/IconSkipBack.svelte";
  import IconSkipForward from "$lib/icons/IconSkipForward.svelte";
  import IconSlack from "$lib/icons/IconSlack.svelte";
  import IconSlash from "$lib/icons/IconSlash.svelte";
  import IconSliders from "$lib/icons/IconSliders.svelte";
  import IconSmartphone from "$lib/icons/IconSmartphone.svelte";
  import IconSmile from "$lib/icons/IconSmile.svelte";
  import IconSpeaker from "$lib/icons/IconSpeaker.svelte";
  import IconSquare from "$lib/icons/IconSquare.svelte";
  import IconStar from "$lib/icons/IconStar.svelte";
  import IconStopCircle from "$lib/icons/IconStopCircle.svelte";
  import IconSun from "$lib/icons/IconSun.svelte";
  import IconSunrise from "$lib/icons/IconSunrise.svelte";
  import IconSunset from "$lib/icons/IconSunset.svelte";
  import IconTable from "$lib/icons/IconTable.svelte";
  import IconTablet from "$lib/icons/IconTablet.svelte";
  import IconTag from "$lib/icons/IconTag.svelte";
  import IconTarget from "$lib/icons/IconTarget.svelte";
  import IconTerminal from "$lib/icons/IconTerminal.svelte";
  import IconThermometer from "$lib/icons/IconThermometer.svelte";
  import IconThumbsDown from "$lib/icons/IconThumbsDown.svelte";
  import IconThumbsUp from "$lib/icons/IconThumbsUp.svelte";
  import IconToggleLeft from "$lib/icons/IconToggleLeft.svelte";
  import IconToggleRight from "$lib/icons/IconToggleRight.svelte";
  import IconTool from "$lib/icons/IconTool.svelte";
  import IconTrash from "$lib/icons/IconTrash.svelte";
  import IconTrash2 from "$lib/icons/IconTrash2.svelte";
  import IconTrello from "$lib/icons/IconTrello.svelte";
  import IconTrendingDown from "$lib/icons/IconTrendingDown.svelte";
  import IconTrendingUp from "$lib/icons/IconTrendingUp.svelte";
  import IconTriangle from "$lib/icons/IconTriangle.svelte";
  import IconTruck from "$lib/icons/IconTruck.svelte";
  import IconTv from "$lib/icons/IconTv.svelte";
  import IconTwitch from "$lib/icons/IconTwitch.svelte";
  import IconTwitter from "$lib/icons/IconTwitter.svelte";
  import IconType from "$lib/icons/IconType.svelte";
  import IconUmbrella from "$lib/icons/IconUmbrella.svelte";
  import IconUnderline from "$lib/icons/IconUnderline.svelte";
  import IconUnlock from "$lib/icons/IconUnlock.svelte";
  import IconUpload from "$lib/icons/IconUpload.svelte";
  import IconUploadCloud from "$lib/icons/IconUploadCloud.svelte";
  import IconUser from "$lib/icons/IconUser.svelte";
  import IconUserCheck from "$lib/icons/IconUserCheck.svelte";
  import IconUserMinus from "$lib/icons/IconUserMinus.svelte";
  import IconUserPlus from "$lib/icons/IconUserPlus.svelte";
  import IconUserX from "$lib/icons/IconUserX.svelte";
  import IconUsers from "$lib/icons/IconUsers.svelte";
  import IconVideo from "$lib/icons/IconVideo.svelte";
  import IconVideoOff from "$lib/icons/IconVideoOff.svelte";
  import IconVoicemail from "$lib/icons/IconVoicemail.svelte";
  import IconVolume from "$lib/icons/IconVolume.svelte";
  import IconVolume2 from "$lib/icons/IconVolume2.svelte";
  import IconVolume3 from "$lib/icons/IconVolume3.svelte";
  import IconVolumeX from "$lib/icons/IconVolumeX.svelte";
  import IconWatch from "$lib/icons/IconWatch.svelte";
  import IconWifi from "$lib/icons/IconWifi.svelte";
  import IconWifiOff from "$lib/icons/IconWifiOff.svelte";
  import IconWind from "$lib/icons/IconWind.svelte";
  import IconX from "$lib/icons/IconX.svelte";
  import IconXCircle from "$lib/icons/IconXCircle.svelte";
  import IconXOctagon from "$lib/icons/IconXOctagon.svelte";
  import IconXSquare from "$lib/icons/IconXSquare.svelte";
  import IconYoutube from "$lib/icons/IconYoutube.svelte";
  import IconZap from "$lib/icons/IconZap.svelte";
  import IconZapOff from "$lib/icons/IconZapOff.svelte";
  import IconZoomIn from "$lib/icons/IconZoomIn.svelte";
  import IconZoomOut from "$lib/icons/IconZoomOut.svelte";

</script>

<h2>Icons</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <IconCamera />
    <IconCopy />
    <IconDownloadCloud />
  </div>
</div>
<Highlight code={`
  <IconCamera />
  <IconCopy />
  <IconDownloadCloud />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <IconCopy size="sm" />
    <IconCopy />
    <IconCopy size="lg" />
  </div>
</div>
<Highlight code={`
  <IconDownloadCloud size="sm" />
  <IconDownloadCloud />
  <IconDownloadCloud size="lg" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Tooltip text="IconActivity"><IconActivity /></Tooltip>
    <Tooltip text="IconAirplay"><IconAirplay /></Tooltip>
    <Tooltip text="IconAlertCircle"><IconAlertCircle /></Tooltip>
    <Tooltip text="IconAlertOctagon"><IconAlertOctagon /></Tooltip>
    <Tooltip text="IconAlertTriangle"><IconAlertTriangle /></Tooltip>
    <Tooltip text="IconAlignCenter"><IconAlignCenter /></Tooltip>
    <Tooltip text="IconAlignJustify"><IconAlignJustify /></Tooltip>
    <Tooltip text="IconAlignLeft"><IconAlignLeft /></Tooltip>
    <Tooltip text="IconAlignRight"><IconAlignRight /></Tooltip>
    <Tooltip text="IconAnchor"><IconAnchor /></Tooltip>
    <Tooltip text="IconAperture"><IconAperture /></Tooltip>
    <Tooltip text="IconArchive"><IconArchive /></Tooltip>
    <Tooltip text="IconArrowDown"><IconArrowDown /></Tooltip>
    <Tooltip text="IconArrowDownCircle"><IconArrowDownCircle /></Tooltip>
    <Tooltip text="IconArrowDownLeft"><IconArrowDownLeft /></Tooltip>
    <Tooltip text="IconArrowDownRight"><IconArrowDownRight /></Tooltip>
    <Tooltip text="IconArrowLeft"><IconArrowLeft /></Tooltip>
    <Tooltip text="IconArrowLeftCircle"><IconArrowLeftCircle /></Tooltip>
    <Tooltip text="IconArrowRight"><IconArrowRight /></Tooltip>
    <Tooltip text="IconArrowRightCircle"><IconArrowRightCircle /></Tooltip>
    <Tooltip text="IconArrowUp"><IconArrowUp /></Tooltip>
    <Tooltip text="IconArrowUpCircle"><IconArrowUpCircle /></Tooltip>
    <Tooltip text="IconArrowUpLeft"><IconArrowUpLeft /></Tooltip>
    <Tooltip text="IconArrowUpRight"><IconArrowUpRight /></Tooltip>
    <Tooltip text="IconAtSign"><IconAtSign /></Tooltip>
    <Tooltip text="IconAward"><IconAward /></Tooltip>
    <Tooltip text="IconBarChart"><IconBarChart /></Tooltip>
    <Tooltip text="IconBarChart2"><IconBarChart2 /></Tooltip>
    <Tooltip text="IconBattery"><IconBattery /></Tooltip>
    <Tooltip text="IconBatteryCharging"><IconBatteryCharging /></Tooltip>
    <Tooltip text="IconBell"><IconBell /></Tooltip>
    <Tooltip text="IconBellOff"><IconBellOff /></Tooltip>
    <Tooltip text="IconBluetooth"><IconBluetooth /></Tooltip>
    <Tooltip text="IconBold"><IconBold /></Tooltip>
    <Tooltip text="IconBook"><IconBook /></Tooltip>
    <Tooltip text="IconBookOpen"><IconBookOpen /></Tooltip>
    <Tooltip text="IconBookmark"><IconBookmark /></Tooltip>
    <Tooltip text="IconBox"><IconBox /></Tooltip>
    <Tooltip text="IconBriefcase"><IconBriefcase /></Tooltip>
    <Tooltip text="IconCalendar"><IconCalendar /></Tooltip>
    <Tooltip text="IconCamera"><IconCamera /></Tooltip>
    <Tooltip text="IconCameraOff"><IconCameraOff /></Tooltip>
    <Tooltip text="IconCast"><IconCast /></Tooltip>
    <Tooltip text="IconCheck"><IconCheck /></Tooltip>
    <Tooltip text="IconCheckCircle"><IconCheckCircle /></Tooltip>
    <Tooltip text="IconCheckSquare"><IconCheckSquare /></Tooltip>
    <Tooltip text="IconChevronDown"><IconChevronDown /></Tooltip>
    <Tooltip text="IconChevronLeft"><IconChevronLeft /></Tooltip>
    <Tooltip text="IconChevronRight"><IconChevronRight /></Tooltip>
    <Tooltip text="IconChevronUp"><IconChevronUp /></Tooltip>
    <Tooltip text="IconChevronsDown"><IconChevronsDown /></Tooltip>
    <Tooltip text="IconChevronsLeft"><IconChevronsLeft /></Tooltip>
    <Tooltip text="IconChevronsRight"><IconChevronsRight /></Tooltip>
    <Tooltip text="IconChevronsUp"><IconChevronsUp /></Tooltip>
    <Tooltip text="IconChrome"><IconChrome /></Tooltip>
    <Tooltip text="IconCircle"><IconCircle /></Tooltip>
    <Tooltip text="IconClipboard"><IconClipboard /></Tooltip>
    <Tooltip text="IconClock"><IconClock /></Tooltip>
    <Tooltip text="IconCloud"><IconCloud /></Tooltip>
    <Tooltip text="IconCloudDrizzle"><IconCloudDrizzle /></Tooltip>
    <Tooltip text="IconCloudLightning"><IconCloudLightning /></Tooltip>
    <Tooltip text="IconCloudOff"><IconCloudOff /></Tooltip>
    <Tooltip text="IconCloudRain"><IconCloudRain /></Tooltip>
    <Tooltip text="IconCloudSnow"><IconCloudSnow /></Tooltip>
    <Tooltip text="IconCode"><IconCode /></Tooltip>
    <Tooltip text="IconCodepen"><IconCodepen /></Tooltip>
    <Tooltip text="IconCodesandbox"><IconCodesandbox /></Tooltip>
    <Tooltip text="IconCoffee"><IconCoffee /></Tooltip>
    <Tooltip text="IconColumns"><IconColumns /></Tooltip>
    <Tooltip text="IconCommand"><IconCommand /></Tooltip>
    <Tooltip text="IconCompass"><IconCompass /></Tooltip>
    <Tooltip text="IconCopy"><IconCopy /></Tooltip>
    <Tooltip text="IconCornerDownLeft"><IconCornerDownLeft /></Tooltip>
    <Tooltip text="IconCornerDownRight"><IconCornerDownRight /></Tooltip>
    <Tooltip text="IconCornerLeftDown"><IconCornerLeftDown /></Tooltip>
    <Tooltip text="IconCornerLeftUp"><IconCornerLeftUp /></Tooltip>
    <Tooltip text="IconCornerRightDown"><IconCornerRightDown /></Tooltip>
    <Tooltip text="IconCornerRightUp"><IconCornerRightUp /></Tooltip>
    <Tooltip text="IconCornerUpLeft"><IconCornerUpLeft /></Tooltip>
    <Tooltip text="IconCornerUpRight"><IconCornerUpRight /></Tooltip>
    <Tooltip text="IconCpu"><IconCpu /></Tooltip>
    <Tooltip text="IconCreditCard"><IconCreditCard /></Tooltip>
    <Tooltip text="IconCrop"><IconCrop /></Tooltip>
    <Tooltip text="IconCrosshair"><IconCrosshair /></Tooltip>
    <Tooltip text="IconDatabase"><IconDatabase /></Tooltip>
    <Tooltip text="IconDelete"><IconDelete /></Tooltip>
    <Tooltip text="IconDisc"><IconDisc /></Tooltip>
    <Tooltip text="IconDivide"><IconDivide /></Tooltip>
    <Tooltip text="IconDivideCircle"><IconDivideCircle /></Tooltip>
    <Tooltip text="IconDivideSquare"><IconDivideSquare /></Tooltip>
    <Tooltip text="IconDollarSign"><IconDollarSign /></Tooltip>
    <Tooltip text="IconDot"><IconDot /></Tooltip>
    <Tooltip text="IconDownload"><IconDownload /></Tooltip>
    <Tooltip text="IconDownloadCloud"><IconDownloadCloud /></Tooltip>
    <Tooltip text="IconDribbble"><IconDribbble /></Tooltip>
    <Tooltip text="IconDroplet"><IconDroplet /></Tooltip>
    <Tooltip text="IconEdit"><IconEdit /></Tooltip>
    <Tooltip text="IconEdit2"><IconEdit2 /></Tooltip>
    <Tooltip text="IconEdit3"><IconEdit3 /></Tooltip>
    <Tooltip text="IconExternalLink"><IconExternalLink /></Tooltip>
    <Tooltip text="IconEye"><IconEye /></Tooltip>
    <Tooltip text="IconEyeOff"><IconEyeOff /></Tooltip>
    <Tooltip text="IconFacebook"><IconFacebook /></Tooltip>
    <Tooltip text="IconFastForward"><IconFastForward /></Tooltip>
    <Tooltip text="IconFeather"><IconFeather /></Tooltip>
    <Tooltip text="IconFigma"><IconFigma /></Tooltip>
    <Tooltip text="IconFile"><IconFile /></Tooltip>
    <Tooltip text="IconFileMinus"><IconFileMinus /></Tooltip>
    <Tooltip text="IconFilePlus"><IconFilePlus /></Tooltip>
    <Tooltip text="IconFileText"><IconFileText /></Tooltip>
    <Tooltip text="IconFilm"><IconFilm /></Tooltip>
    <Tooltip text="IconFilter"><IconFilter /></Tooltip>
    <Tooltip text="IconFlag"><IconFlag /></Tooltip>
    <Tooltip text="IconFolder"><IconFolder /></Tooltip>
    <Tooltip text="IconFolderMinus"><IconFolderMinus /></Tooltip>
    <Tooltip text="IconFolderPlus"><IconFolderPlus /></Tooltip>
    <Tooltip text="IconFramer"><IconFramer /></Tooltip>
    <Tooltip text="IconFrown"><IconFrown /></Tooltip>
    <Tooltip text="IconGift"><IconGift /></Tooltip>
    <Tooltip text="IconGitBranch"><IconGitBranch /></Tooltip>
    <Tooltip text="IconGitCommit"><IconGitCommit /></Tooltip>
    <Tooltip text="IconGitMerge"><IconGitMerge /></Tooltip>
    <Tooltip text="IconGitPullRequest"><IconGitPullRequest /></Tooltip>
    <Tooltip text="IconGithub"><IconGithub /></Tooltip>
    <Tooltip text="IconGitlab"><IconGitlab /></Tooltip>
    <Tooltip text="IconGlobe"><IconGlobe /></Tooltip>
    <Tooltip text="IconGrid"><IconGrid /></Tooltip>
    <Tooltip text="IconHardDrive"><IconHardDrive /></Tooltip>
    <Tooltip text="IconHash"><IconHash /></Tooltip>
    <Tooltip text="IconHeadphones"><IconHeadphones /></Tooltip>
    <Tooltip text="IconHeart"><IconHeart /></Tooltip>
    <Tooltip text="IconHelpCircle"><IconHelpCircle /></Tooltip>
    <Tooltip text="IconHexagon"><IconHexagon /></Tooltip>
    <Tooltip text="IconHome"><IconHome /></Tooltip>
    <Tooltip text="IconImage"><IconImage /></Tooltip>
    <Tooltip text="IconInbox"><IconInbox /></Tooltip>
    <Tooltip text="IconInfo"><IconInfo /></Tooltip>
    <Tooltip text="IconInstagram"><IconInstagram /></Tooltip>
    <Tooltip text="IconItalic"><IconItalic /></Tooltip>
    <Tooltip text="IconKey"><IconKey /></Tooltip>
    <Tooltip text="IconLayers"><IconLayers /></Tooltip>
    <Tooltip text="IconLayout"><IconLayout /></Tooltip>
    <Tooltip text="IconLifeBuoy"><IconLifeBuoy /></Tooltip>
    <Tooltip text="IconLink"><IconLink /></Tooltip>
    <Tooltip text="IconLink2"><IconLink2 /></Tooltip>
    <Tooltip text="IconLinkedin"><IconLinkedin /></Tooltip>
    <Tooltip text="IconList"><IconList /></Tooltip>
    <Tooltip text="IconLoader"><IconLoader /></Tooltip>
    <Tooltip text="IconLock"><IconLock /></Tooltip>
    <Tooltip text="IconLogIn"><IconLogIn /></Tooltip>
    <Tooltip text="IconLogOut"><IconLogOut /></Tooltip>
    <Tooltip text="IconMail"><IconMail /></Tooltip>
    <Tooltip text="IconMap"><IconMap /></Tooltip>
    <Tooltip text="IconMapPin"><IconMapPin /></Tooltip>
    <Tooltip text="IconMaximize"><IconMaximize /></Tooltip>
    <Tooltip text="IconMaximize2"><IconMaximize2 /></Tooltip>
    <Tooltip text="IconMeh"><IconMeh /></Tooltip>
    <Tooltip text="IconMenu"><IconMenu /></Tooltip>
    <Tooltip text="IconMessageCircle"><IconMessageCircle /></Tooltip>
    <Tooltip text="IconMessageSquare"><IconMessageSquare /></Tooltip>
    <Tooltip text="IconMic"><IconMic /></Tooltip>
    <Tooltip text="IconMicOff"><IconMicOff /></Tooltip>
    <Tooltip text="IconMinimize"><IconMinimize /></Tooltip>
    <Tooltip text="IconMinimize2"><IconMinimize2 /></Tooltip>
    <Tooltip text="IconMinus"><IconMinus /></Tooltip>
    <Tooltip text="IconMinusCircle"><IconMinusCircle /></Tooltip>
    <Tooltip text="IconMinusSquare"><IconMinusSquare /></Tooltip>
    <Tooltip text="IconMonitor"><IconMonitor /></Tooltip>
    <Tooltip text="IconMoon"><IconMoon /></Tooltip>
    <Tooltip text="IconMoreHorizontal"><IconMoreHorizontal /></Tooltip>
    <Tooltip text="IconMoreVertical"><IconMoreVertical /></Tooltip>
    <Tooltip text="IconMousePointer"><IconMousePointer /></Tooltip>
    <Tooltip text="IconMove"><IconMove /></Tooltip>
    <Tooltip text="IconMusic"><IconMusic /></Tooltip>
    <Tooltip text="IconNavigation"><IconNavigation /></Tooltip>
    <Tooltip text="IconNavigation2"><IconNavigation2 /></Tooltip>
    <Tooltip text="IconOctagon"><IconOctagon /></Tooltip>
    <Tooltip text="IconPackage"><IconPackage /></Tooltip>
    <Tooltip text="IconPaperclip"><IconPaperclip /></Tooltip>
    <Tooltip text="IconPause"><IconPause /></Tooltip>
    <Tooltip text="IconPauseCircle"><IconPauseCircle /></Tooltip>
    <Tooltip text="IconPenTool"><IconPenTool /></Tooltip>
    <Tooltip text="IconPercent"><IconPercent /></Tooltip>
    <Tooltip text="IconPhone"><IconPhone /></Tooltip>
    <Tooltip text="IconPhoneCall"><IconPhoneCall /></Tooltip>
    <Tooltip text="IconPhoneForwarded"><IconPhoneForwarded /></Tooltip>
    <Tooltip text="IconPhoneIncoming"><IconPhoneIncoming /></Tooltip>
    <Tooltip text="IconPhoneMissed"><IconPhoneMissed /></Tooltip>
    <Tooltip text="IconPhoneOff"><IconPhoneOff /></Tooltip>
    <Tooltip text="IconPhoneOutgoing"><IconPhoneOutgoing /></Tooltip>
    <Tooltip text="IconPieChart"><IconPieChart /></Tooltip>
    <Tooltip text="IconPlay"><IconPlay /></Tooltip>
    <Tooltip text="IconPlayCircle"><IconPlayCircle /></Tooltip>
    <Tooltip text="IconPlus"><IconPlus /></Tooltip>
    <Tooltip text="IconPlusCircle"><IconPlusCircle /></Tooltip>
    <Tooltip text="IconPlusSquare"><IconPlusSquare /></Tooltip>
    <Tooltip text="IconPocket"><IconPocket /></Tooltip>
    <Tooltip text="IconPower"><IconPower /></Tooltip>
    <Tooltip text="IconPrinter"><IconPrinter /></Tooltip>
    <Tooltip text="IconRadio"><IconRadio /></Tooltip>
    <Tooltip text="IconRefreshCcw"><IconRefreshCcw /></Tooltip>
    <Tooltip text="IconRefreshCw"><IconRefreshCw /></Tooltip>
    <Tooltip text="IconRepeat"><IconRepeat /></Tooltip>
    <Tooltip text="IconRewind"><IconRewind /></Tooltip>
    <Tooltip text="IconRotateCcw"><IconRotateCcw /></Tooltip>
    <Tooltip text="IconRotateCw"><IconRotateCw /></Tooltip>
    <Tooltip text="IconRss"><IconRss /></Tooltip>
    <Tooltip text="IconSave"><IconSave /></Tooltip>
    <Tooltip text="IconScissors"><IconScissors /></Tooltip>
    <Tooltip text="IconSearch"><IconSearch /></Tooltip>
    <Tooltip text="IconSend"><IconSend /></Tooltip>
    <Tooltip text="IconServer"><IconServer /></Tooltip>
    <Tooltip text="IconSettings"><IconSettings /></Tooltip>
    <Tooltip text="IconShare"><IconShare /></Tooltip>
    <Tooltip text="IconShare2"><IconShare2 /></Tooltip>
    <Tooltip text="IconShield"><IconShield /></Tooltip>
    <Tooltip text="IconShieldOff"><IconShieldOff /></Tooltip>
    <Tooltip text="IconShoppingBag"><IconShoppingBag /></Tooltip>
    <Tooltip text="IconShoppingCart"><IconShoppingCart /></Tooltip>
    <Tooltip text="IconShuffle"><IconShuffle /></Tooltip>
    <Tooltip text="IconSidebar"><IconSidebar /></Tooltip>
    <Tooltip text="IconSkipBack"><IconSkipBack /></Tooltip>
    <Tooltip text="IconSkipForward"><IconSkipForward /></Tooltip>
    <Tooltip text="IconSlack"><IconSlack /></Tooltip>
    <Tooltip text="IconSlash"><IconSlash /></Tooltip>
    <Tooltip text="IconSliders"><IconSliders /></Tooltip>
    <Tooltip text="IconSmartphone"><IconSmartphone /></Tooltip>
    <Tooltip text="IconSmile"><IconSmile /></Tooltip>
    <Tooltip text="IconSpeaker"><IconSpeaker /></Tooltip>
    <Tooltip text="IconSquare"><IconSquare /></Tooltip>
    <Tooltip text="IconStar"><IconStar /></Tooltip>
    <Tooltip text="IconStopCircle"><IconStopCircle /></Tooltip>
    <Tooltip text="IconSun"><IconSun /></Tooltip>
    <Tooltip text="IconSunrise"><IconSunrise /></Tooltip>
    <Tooltip text="IconSunset"><IconSunset /></Tooltip>
    <Tooltip text="IconTable"><IconTable /></Tooltip>
    <Tooltip text="IconTablet"><IconTablet /></Tooltip>
    <Tooltip text="IconTag"><IconTag /></Tooltip>
    <Tooltip text="IconTarget"><IconTarget /></Tooltip>
    <Tooltip text="IconTerminal"><IconTerminal /></Tooltip>
    <Tooltip text="IconThermometer"><IconThermometer /></Tooltip>
    <Tooltip text="IconThumbsDown"><IconThumbsDown /></Tooltip>
    <Tooltip text="IconThumbsUp"><IconThumbsUp /></Tooltip>
    <Tooltip text="IconToggleLeft"><IconToggleLeft /></Tooltip>
    <Tooltip text="IconToggleRight"><IconToggleRight /></Tooltip>
    <Tooltip text="IconTool"><IconTool /></Tooltip>
    <Tooltip text="IconTrash"><IconTrash /></Tooltip>
    <Tooltip text="IconTrash2"><IconTrash2 /></Tooltip>
    <Tooltip text="IconTrello"><IconTrello /></Tooltip>
    <Tooltip text="IconTrendingDown"><IconTrendingDown /></Tooltip>
    <Tooltip text="IconTrendingUp"><IconTrendingUp /></Tooltip>
    <Tooltip text="IconTriangle"><IconTriangle /></Tooltip>
    <Tooltip text="IconTruck"><IconTruck /></Tooltip>
    <Tooltip text="IconTv"><IconTv /></Tooltip>
    <Tooltip text="IconTwitch"><IconTwitch /></Tooltip>
    <Tooltip text="IconTwitter"><IconTwitter /></Tooltip>
    <Tooltip text="IconType"><IconType /></Tooltip>
    <Tooltip text="IconUmbrella"><IconUmbrella /></Tooltip>
    <Tooltip text="IconUnderline"><IconUnderline /></Tooltip>
    <Tooltip text="IconUnlock"><IconUnlock /></Tooltip>
    <Tooltip text="IconUpload"><IconUpload /></Tooltip>
    <Tooltip text="IconUploadCloud"><IconUploadCloud /></Tooltip>
    <Tooltip text="IconUser"><IconUser /></Tooltip>
    <Tooltip text="IconUserCheck"><IconUserCheck /></Tooltip>
    <Tooltip text="IconUserMinus"><IconUserMinus /></Tooltip>
    <Tooltip text="IconUserPlus"><IconUserPlus /></Tooltip>
    <Tooltip text="IconUserX"><IconUserX /></Tooltip>
    <Tooltip text="IconUsers"><IconUsers /></Tooltip>
    <Tooltip text="IconVideo"><IconVideo /></Tooltip>
    <Tooltip text="IconVideoOff"><IconVideoOff /></Tooltip>
    <Tooltip text="IconVoicemail"><IconVoicemail /></Tooltip>
    <Tooltip text="IconVolume"><IconVolume /></Tooltip>
    <Tooltip text="IconVolume2"><IconVolume2 /></Tooltip>
    <Tooltip text="IconVolume3"><IconVolume3 /></Tooltip>
    <Tooltip text="IconVolumeX"><IconVolumeX /></Tooltip>
    <Tooltip text="IconWatch"><IconWatch /></Tooltip>
    <Tooltip text="IconWifi"><IconWifi /></Tooltip>
    <Tooltip text="IconWifiOff"><IconWifiOff /></Tooltip>
    <Tooltip text="IconWind"><IconWind /></Tooltip>
    <Tooltip text="IconX"><IconX /></Tooltip>
    <Tooltip text="IconXCircle"><IconXCircle /></Tooltip>
    <Tooltip text="IconXOctagon"><IconXOctagon /></Tooltip>
    <Tooltip text="IconXSquare"><IconXSquare /></Tooltip>
    <Tooltip text="IconYoutube"><IconYoutube /></Tooltip>
    <Tooltip text="IconZap"><IconZap /></Tooltip>
    <Tooltip text="IconZapOff"><IconZapOff /></Tooltip>
    <Tooltip text="IconZoomIn"><IconZoomIn /></Tooltip>
    <Tooltip text="IconZoomOut"><IconZoomOut /></Tooltip>
  </div>
</div>
