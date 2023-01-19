<script>
  import Highlight from "$lib/Highlight.svelte";
  import Tooltip from "$lib/Tooltip.svelte";

  import IconAccessibility from "$lib/icons/IconAccessibility.svelte";
  import IconActivity from "$lib/icons/IconActivity.svelte";
  import IconAirplay from "$lib/icons/IconAirplay.svelte";
  import IconAirVent from "$lib/icons/IconAirVent.svelte";
  import IconAlarmCheck from "$lib/icons/IconAlarmCheck.svelte";
  import IconAlarmClock from "$lib/icons/IconAlarmClock.svelte";
  import IconAlarmClockOff from "$lib/icons/IconAlarmClockOff.svelte";
  import IconAlarmMinus from "$lib/icons/IconAlarmMinus.svelte";
  import IconAlarmPlus from "$lib/icons/IconAlarmPlus.svelte";
  import IconAlbum from "$lib/icons/IconAlbum.svelte";
  import IconAlertCircle from "$lib/icons/IconAlertCircle.svelte";
  import IconAlertOctagon from "$lib/icons/IconAlertOctagon.svelte";
  import IconAlertTriangle from "$lib/icons/IconAlertTriangle.svelte";
  import IconAlignCenter from "$lib/icons/IconAlignCenter.svelte";
  import IconAlignCenterHorizontal from "$lib/icons/IconAlignCenterHorizontal.svelte";
  import IconAlignCenterVertical from "$lib/icons/IconAlignCenterVertical.svelte";
  import IconAlignEndHorizontal from "$lib/icons/IconAlignEndHorizontal.svelte";
  import IconAlignEndVertical from "$lib/icons/IconAlignEndVertical.svelte";
  import IconAlignHorizontalDistributeCenter from "$lib/icons/IconAlignHorizontalDistributeCenter.svelte";
  import IconAlignHorizontalDistributeEnd from "$lib/icons/IconAlignHorizontalDistributeEnd.svelte";
  import IconAlignHorizontalDistributeStart from "$lib/icons/IconAlignHorizontalDistributeStart.svelte";
  import IconAlignHorizontalJustifyCenter from "$lib/icons/IconAlignHorizontalJustifyCenter.svelte";
  import IconAlignHorizontalJustifyEnd from "$lib/icons/IconAlignHorizontalJustifyEnd.svelte";
  import IconAlignHorizontalJustifyStart from "$lib/icons/IconAlignHorizontalJustifyStart.svelte";
  import IconAlignHorizontalSpaceAround from "$lib/icons/IconAlignHorizontalSpaceAround.svelte";
  import IconAlignHorizontalSpaceBetween from "$lib/icons/IconAlignHorizontalSpaceBetween.svelte";
  import IconAlignJustify from "$lib/icons/IconAlignJustify.svelte";
  import IconAlignLeft from "$lib/icons/IconAlignLeft.svelte";
  import IconAlignRight from "$lib/icons/IconAlignRight.svelte";
  import IconAlignStartHorizontal from "$lib/icons/IconAlignStartHorizontal.svelte";
  import IconAlignStartVertical from "$lib/icons/IconAlignStartVertical.svelte";
  import IconAlignVerticalDistributeCenter from "$lib/icons/IconAlignVerticalDistributeCenter.svelte";
  import IconAlignVerticalDistributeEnd from "$lib/icons/IconAlignVerticalDistributeEnd.svelte";
  import IconAlignVerticalDistributeStart from "$lib/icons/IconAlignVerticalDistributeStart.svelte";
  import IconAlignVerticalJustifyCenter from "$lib/icons/IconAlignVerticalJustifyCenter.svelte";
  import IconAlignVerticalJustifyEnd from "$lib/icons/IconAlignVerticalJustifyEnd.svelte";
  import IconAlignVerticalJustifyStart from "$lib/icons/IconAlignVerticalJustifyStart.svelte";
  import IconAlignVerticalSpaceAround from "$lib/icons/IconAlignVerticalSpaceAround.svelte";
  import IconAlignVerticalSpaceBetween from "$lib/icons/IconAlignVerticalSpaceBetween.svelte";
  import IconAnchor from "$lib/icons/IconAnchor.svelte";
  import IconAngry from "$lib/icons/IconAngry.svelte";
  import IconAnnoyed from "$lib/icons/IconAnnoyed.svelte";
  import IconAperture from "$lib/icons/IconAperture.svelte";
  import IconApple from "$lib/icons/IconApple.svelte";
  import IconArchive from "$lib/icons/IconArchive.svelte";
  import IconArchiveRestore from "$lib/icons/IconArchiveRestore.svelte";
  import IconArmchair from "$lib/icons/IconArmchair.svelte";
  import IconArrowBigDown from "$lib/icons/IconArrowBigDown.svelte";
  import IconArrowBigLeft from "$lib/icons/IconArrowBigLeft.svelte";
  import IconArrowBigRight from "$lib/icons/IconArrowBigRight.svelte";
  import IconArrowBigUp from "$lib/icons/IconArrowBigUp.svelte";
  import IconArrowDown from "$lib/icons/IconArrowDown.svelte";
  import IconArrowDownCircle from "$lib/icons/IconArrowDownCircle.svelte";
  import IconArrowDownLeft from "$lib/icons/IconArrowDownLeft.svelte";
  import IconArrowDownRight from "$lib/icons/IconArrowDownRight.svelte";
  import IconArrowLeft from "$lib/icons/IconArrowLeft.svelte";
  import IconArrowLeftCircle from "$lib/icons/IconArrowLeftCircle.svelte";
  import IconArrowLeftRight from "$lib/icons/IconArrowLeftRight.svelte";
  import IconArrowRight from "$lib/icons/IconArrowRight.svelte";
  import IconArrowRightCircle from "$lib/icons/IconArrowRightCircle.svelte";
  import IconArrowUp from "$lib/icons/IconArrowUp.svelte";
  import IconArrowUpCircle from "$lib/icons/IconArrowUpCircle.svelte";
  import IconArrowUpDown from "$lib/icons/IconArrowUpDown.svelte";
  import IconArrowUpLeft from "$lib/icons/IconArrowUpLeft.svelte";
  import IconArrowUpRight from "$lib/icons/IconArrowUpRight.svelte";
  import IconAsterisk from "$lib/icons/IconAsterisk.svelte";
  import IconAtSign from "$lib/icons/IconAtSign.svelte";
  import IconAward from "$lib/icons/IconAward.svelte";
  import IconAxe from "$lib/icons/IconAxe.svelte";
  import IconAxis3D from "$lib/icons/IconAxis3D.svelte";
  import IconBaby from "$lib/icons/IconBaby.svelte";
  import IconBackpack from "$lib/icons/IconBackpack.svelte";
  import IconBaggageClaim from "$lib/icons/IconBaggageClaim.svelte";
  import IconBanana from "$lib/icons/IconBanana.svelte";
  import IconBanknote from "$lib/icons/IconBanknote.svelte";
  import IconBarChart from "$lib/icons/IconBarChart.svelte";
  import IconBarChart2 from "$lib/icons/IconBarChart2.svelte";
  import IconBarChart3 from "$lib/icons/IconBarChart3.svelte";
  import IconBarChart4 from "$lib/icons/IconBarChart4.svelte";
  import IconBarChartHorizontal from "$lib/icons/IconBarChartHorizontal.svelte";
  import IconBaseline from "$lib/icons/IconBaseline.svelte";
  import IconBath from "$lib/icons/IconBath.svelte";
  import IconBattery from "$lib/icons/IconBattery.svelte";
  import IconBatteryCharging from "$lib/icons/IconBatteryCharging.svelte";
  import IconBatteryFull from "$lib/icons/IconBatteryFull.svelte";
  import IconBatteryLow from "$lib/icons/IconBatteryLow.svelte";
  import IconBatteryMedium from "$lib/icons/IconBatteryMedium.svelte";
  import IconBeaker from "$lib/icons/IconBeaker.svelte";
  import IconBean from "$lib/icons/IconBean.svelte";
  import IconBeanOff from "$lib/icons/IconBeanOff.svelte";
  import IconBed from "$lib/icons/IconBed.svelte";
  import IconBedDouble from "$lib/icons/IconBedDouble.svelte";
  import IconBedSingle from "$lib/icons/IconBedSingle.svelte";
  import IconBeer from "$lib/icons/IconBeer.svelte";
  import IconBell from "$lib/icons/IconBell.svelte";
  import IconBellMinus from "$lib/icons/IconBellMinus.svelte";
  import IconBellOff from "$lib/icons/IconBellOff.svelte";
  import IconBellPlus from "$lib/icons/IconBellPlus.svelte";
  import IconBellRing from "$lib/icons/IconBellRing.svelte";
  import IconBike from "$lib/icons/IconBike.svelte";
  import IconBinary from "$lib/icons/IconBinary.svelte";
  import IconBitcoin from "$lib/icons/IconBitcoin.svelte";
  import IconBluetooth from "$lib/icons/IconBluetooth.svelte";
  import IconBluetoothConnected from "$lib/icons/IconBluetoothConnected.svelte";
  import IconBluetoothOff from "$lib/icons/IconBluetoothOff.svelte";
  import IconBluetoothSearching from "$lib/icons/IconBluetoothSearching.svelte";
  import IconBold from "$lib/icons/IconBold.svelte";
  import IconBomb from "$lib/icons/IconBomb.svelte";
  import IconBone from "$lib/icons/IconBone.svelte";
  import IconBook from "$lib/icons/IconBook.svelte";
  import IconBookmark from "$lib/icons/IconBookmark.svelte";
  import IconBookmarkMinus from "$lib/icons/IconBookmarkMinus.svelte";
  import IconBookmarkPlus from "$lib/icons/IconBookmarkPlus.svelte";
  import IconBookOpen from "$lib/icons/IconBookOpen.svelte";
  import IconBookOpenCheck from "$lib/icons/IconBookOpenCheck.svelte";
  import IconBot from "$lib/icons/IconBot.svelte";
  import IconBox from "$lib/icons/IconBox.svelte";
  import IconBoxes from "$lib/icons/IconBoxes.svelte";
  import IconBoxSelect from "$lib/icons/IconBoxSelect.svelte";
  import IconBriefcase from "$lib/icons/IconBriefcase.svelte";
  import IconBrush from "$lib/icons/IconBrush.svelte";
  import IconBug from "$lib/icons/IconBug.svelte";
  import IconBuilding from "$lib/icons/IconBuilding.svelte";
  import IconBuilding2 from "$lib/icons/IconBuilding2.svelte";
  import IconBus from "$lib/icons/IconBus.svelte";
  import IconCake from "$lib/icons/IconCake.svelte";
  import IconCalculator from "$lib/icons/IconCalculator.svelte";
  import IconCalendar from "$lib/icons/IconCalendar.svelte";
  import IconCalendarCheck from "$lib/icons/IconCalendarCheck.svelte";
  import IconCalendarCheck2 from "$lib/icons/IconCalendarCheck2.svelte";
  import IconCalendarClock from "$lib/icons/IconCalendarClock.svelte";
  import IconCalendarDays from "$lib/icons/IconCalendarDays.svelte";
  import IconCalendarHeart from "$lib/icons/IconCalendarHeart.svelte";
  import IconCalendarMinus from "$lib/icons/IconCalendarMinus.svelte";
  import IconCalendarOff from "$lib/icons/IconCalendarOff.svelte";
  import IconCalendarPlus from "$lib/icons/IconCalendarPlus.svelte";
  import IconCalendarRange from "$lib/icons/IconCalendarRange.svelte";
  import IconCalendarSearch from "$lib/icons/IconCalendarSearch.svelte";
  import IconCalendarX from "$lib/icons/IconCalendarX.svelte";
  import IconCalendarX2 from "$lib/icons/IconCalendarX2.svelte";
  import IconCamera from "$lib/icons/IconCamera.svelte";
  import IconCameraOff from "$lib/icons/IconCameraOff.svelte";
  import IconCandy from "$lib/icons/IconCandy.svelte";
  import IconCandyOff from "$lib/icons/IconCandyOff.svelte";
  import IconCar from "$lib/icons/IconCar.svelte";
  import IconCarrot from "$lib/icons/IconCarrot.svelte";
  import IconCast from "$lib/icons/IconCast.svelte";
  import IconCat from "$lib/icons/IconCat.svelte";
  import IconCheck from "$lib/icons/IconCheck.svelte";
  import IconCheckCheck from "$lib/icons/IconCheckCheck.svelte";
  import IconCheckCircle from "$lib/icons/IconCheckCircle.svelte";
  import IconCheckCircle2 from "$lib/icons/IconCheckCircle2.svelte";
  import IconCheckSquare from "$lib/icons/IconCheckSquare.svelte";
  import IconChefHat from "$lib/icons/IconChefHat.svelte";
  import IconCherry from "$lib/icons/IconCherry.svelte";
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconChevronFirst from "$lib/icons/IconChevronFirst.svelte";
  import IconChevronLast from "$lib/icons/IconChevronLast.svelte";
  import IconChevronLeft from "$lib/icons/IconChevronLeft.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";
  import IconChevronsDown from "$lib/icons/IconChevronsDown.svelte";
  import IconChevronsDownUp from "$lib/icons/IconChevronsDownUp.svelte";
  import IconChevronsLeft from "$lib/icons/IconChevronsLeft.svelte";
  import IconChevronsLeftRight from "$lib/icons/IconChevronsLeftRight.svelte";
  import IconChevronsRight from "$lib/icons/IconChevronsRight.svelte";
  import IconChevronsRightLeft from "$lib/icons/IconChevronsRightLeft.svelte";
  import IconChevronsUp from "$lib/icons/IconChevronsUp.svelte";
  import IconChevronsUpDown from "$lib/icons/IconChevronsUpDown.svelte";
  import IconChevronUp from "$lib/icons/IconChevronUp.svelte";
  import IconChrome from "$lib/icons/IconChrome.svelte";
  import IconCigarette from "$lib/icons/IconCigarette.svelte";
  import IconCigaretteOff from "$lib/icons/IconCigaretteOff.svelte";
  import IconCircle from "$lib/icons/IconCircle.svelte";
  import IconCircleDot from "$lib/icons/IconCircleDot.svelte";
  import IconCircleEllipsis from "$lib/icons/IconCircleEllipsis.svelte";
  import IconCircleSlashed from "$lib/icons/IconCircleSlashed.svelte";
  import IconCitrus from "$lib/icons/IconCitrus.svelte";
  import IconClapperboard from "$lib/icons/IconClapperboard.svelte";
  import IconClipboard from "$lib/icons/IconClipboard.svelte";
  import IconClipboardCheck from "$lib/icons/IconClipboardCheck.svelte";
  import IconClipboardCopy from "$lib/icons/IconClipboardCopy.svelte";
  import IconClipboardEdit from "$lib/icons/IconClipboardEdit.svelte";
  import IconClipboardList from "$lib/icons/IconClipboardList.svelte";
  import IconClipboardSignature from "$lib/icons/IconClipboardSignature.svelte";
  import IconClipboardType from "$lib/icons/IconClipboardType.svelte";
  import IconClipboardX from "$lib/icons/IconClipboardX.svelte";
  import IconClock from "$lib/icons/IconClock.svelte";
  import IconClock1 from "$lib/icons/IconClock1.svelte";
  import IconClock2 from "$lib/icons/IconClock2.svelte";
  import IconClock3 from "$lib/icons/IconClock3.svelte";
  import IconClock4 from "$lib/icons/IconClock4.svelte";
  import IconClock5 from "$lib/icons/IconClock5.svelte";
  import IconClock6 from "$lib/icons/IconClock6.svelte";
  import IconClock7 from "$lib/icons/IconClock7.svelte";
  import IconClock8 from "$lib/icons/IconClock8.svelte";
  import IconClock9 from "$lib/icons/IconClock9.svelte";
  import IconClock10 from "$lib/icons/IconClock10.svelte";
  import IconClock11 from "$lib/icons/IconClock11.svelte";
  import IconClock12 from "$lib/icons/IconClock12.svelte";
  import IconCloud from "$lib/icons/IconCloud.svelte";
  import IconCloudCog from "$lib/icons/IconCloudCog.svelte";
  import IconCloudDrizzle from "$lib/icons/IconCloudDrizzle.svelte";
  import IconCloudFog from "$lib/icons/IconCloudFog.svelte";
  import IconCloudHail from "$lib/icons/IconCloudHail.svelte";
  import IconCloudLightning from "$lib/icons/IconCloudLightning.svelte";
  import IconCloudMoon from "$lib/icons/IconCloudMoon.svelte";
  import IconCloudMoonRain from "$lib/icons/IconCloudMoonRain.svelte";
  import IconCloudOff from "$lib/icons/IconCloudOff.svelte";
  import IconCloudRain from "$lib/icons/IconCloudRain.svelte";
  import IconCloudRainWind from "$lib/icons/IconCloudRainWind.svelte";
  import IconCloudSnow from "$lib/icons/IconCloudSnow.svelte";
  import IconCloudSun from "$lib/icons/IconCloudSun.svelte";
  import IconCloudSunRain from "$lib/icons/IconCloudSunRain.svelte";
  import IconCloudy from "$lib/icons/IconCloudy.svelte";
  import IconClover from "$lib/icons/IconClover.svelte";
  import IconCode from "$lib/icons/IconCode.svelte";
  import IconCode2 from "$lib/icons/IconCode2.svelte";
  import IconCodepen from "$lib/icons/IconCodepen.svelte";
  import IconCodesandbox from "$lib/icons/IconCodesandbox.svelte";
  import IconCoffee from "$lib/icons/IconCoffee.svelte";
  import IconCog from "$lib/icons/IconCog.svelte";
  import IconCoins from "$lib/icons/IconCoins.svelte";
  import IconColumns from "$lib/icons/IconColumns.svelte";
  import IconCommand from "$lib/icons/IconCommand.svelte";
  import IconCompass from "$lib/icons/IconCompass.svelte";
  import IconComponent from "$lib/icons/IconComponent.svelte";
  import IconConciergeBell from "$lib/icons/IconConciergeBell.svelte";
  import IconContact from "$lib/icons/IconContact.svelte";
  import IconContrast from "$lib/icons/IconContrast.svelte";
  import IconCookie from "$lib/icons/IconCookie.svelte";
  import IconCopy from "$lib/icons/IconCopy.svelte";
  import IconCopyleft from "$lib/icons/IconCopyleft.svelte";
  import IconCopyright from "$lib/icons/IconCopyright.svelte";
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
  import IconCroissant from "$lib/icons/IconCroissant.svelte";
  import IconCrop from "$lib/icons/IconCrop.svelte";
  import IconCross from "$lib/icons/IconCross.svelte";
  import IconCrosshair from "$lib/icons/IconCrosshair.svelte";
  import IconCrown from "$lib/icons/IconCrown.svelte";
  import IconCupSoda from "$lib/icons/IconCupSoda.svelte";
  import IconCurlyBraces from "$lib/icons/IconCurlyBraces.svelte";
  import IconCurrency from "$lib/icons/IconCurrency.svelte";
  import IconDatabase from "$lib/icons/IconDatabase.svelte";
  import IconDelete from "$lib/icons/IconDelete.svelte";
  import IconDiamond from "$lib/icons/IconDiamond.svelte";
  import IconDice1 from "$lib/icons/IconDice1.svelte";
  import IconDice2 from "$lib/icons/IconDice2.svelte";
  import IconDice3 from "$lib/icons/IconDice3.svelte";
  import IconDice4 from "$lib/icons/IconDice4.svelte";
  import IconDice5 from "$lib/icons/IconDice5.svelte";
  import IconDice6 from "$lib/icons/IconDice6.svelte";
  import IconDices from "$lib/icons/IconDices.svelte";
  import IconDiff from "$lib/icons/IconDiff.svelte";
  import IconDisc from "$lib/icons/IconDisc.svelte";
  import IconDivide from "$lib/icons/IconDivide.svelte";
  import IconDivideCircle from "$lib/icons/IconDivideCircle.svelte";
  import IconDivideSquare from "$lib/icons/IconDivideSquare.svelte";
  import IconDna from "$lib/icons/IconDna.svelte";
  import IconDnaOff from "$lib/icons/IconDnaOff.svelte";
  import IconDog from "$lib/icons/IconDog.svelte";
  import IconDollarSign from "$lib/icons/IconDollarSign.svelte";
  import IconDownload from "$lib/icons/IconDownload.svelte";
  import IconDownloadCloud from "$lib/icons/IconDownloadCloud.svelte";
  import IconDribbble from "$lib/icons/IconDribbble.svelte";
  import IconDroplet from "$lib/icons/IconDroplet.svelte";
  import IconDroplets from "$lib/icons/IconDroplets.svelte";
  import IconDrumstick from "$lib/icons/IconDrumstick.svelte";
  import IconDumbbell from "$lib/icons/IconDumbbell.svelte";
  import IconEar from "$lib/icons/IconEar.svelte";
  import IconEarOff from "$lib/icons/IconEarOff.svelte";
  import IconEdit from "$lib/icons/IconEdit.svelte";
  import IconEdit2 from "$lib/icons/IconEdit2.svelte";
  import IconEdit3 from "$lib/icons/IconEdit3.svelte";
  import IconEgg from "$lib/icons/IconEgg.svelte";
  import IconEggFried from "$lib/icons/IconEggFried.svelte";
  import IconEggOff from "$lib/icons/IconEggOff.svelte";
  import IconEqual from "$lib/icons/IconEqual.svelte";
  import IconEqualNot from "$lib/icons/IconEqualNot.svelte";
  import IconEraser from "$lib/icons/IconEraser.svelte";
  import IconEuro from "$lib/icons/IconEuro.svelte";
  import IconExpand from "$lib/icons/IconExpand.svelte";
  import IconExternalLink from "$lib/icons/IconExternalLink.svelte";
  import IconEye from "$lib/icons/IconEye.svelte";
  import IconEyeOff from "$lib/icons/IconEyeOff.svelte";
  import IconFacebook from "$lib/icons/IconFacebook.svelte";
  import IconFactory from "$lib/icons/IconFactory.svelte";
  import IconFan from "$lib/icons/IconFan.svelte";
  import IconFastForward from "$lib/icons/IconFastForward.svelte";
  import IconFeather from "$lib/icons/IconFeather.svelte";
  import IconFigma from "$lib/icons/IconFigma.svelte";
  import IconFile from "$lib/icons/IconFile.svelte";
  import IconFileArchive from "$lib/icons/IconFileArchive.svelte";
  import IconFileAudio from "$lib/icons/IconFileAudio.svelte";
  import IconFileAudio2 from "$lib/icons/IconFileAudio2.svelte";
  import IconFileAxis3D from "$lib/icons/IconFileAxis3D.svelte";
  import IconFileBadge from "$lib/icons/IconFileBadge.svelte";
  import IconFileBadge2 from "$lib/icons/IconFileBadge2.svelte";
  import IconFileBarChart from "$lib/icons/IconFileBarChart.svelte";
  import IconFileBarChart2 from "$lib/icons/IconFileBarChart2.svelte";
  import IconFileBox from "$lib/icons/IconFileBox.svelte";
  import IconFileCheck from "$lib/icons/IconFileCheck.svelte";
  import IconFileCheck2 from "$lib/icons/IconFileCheck2.svelte";
  import IconFileClock from "$lib/icons/IconFileClock.svelte";
  import IconFileCode from "$lib/icons/IconFileCode.svelte";
  import IconFileCog from "$lib/icons/IconFileCog.svelte";
  import IconFileCog2 from "$lib/icons/IconFileCog2.svelte";
  import IconFileDiff from "$lib/icons/IconFileDiff.svelte";
  import IconFileDigit from "$lib/icons/IconFileDigit.svelte";
  import IconFileDown from "$lib/icons/IconFileDown.svelte";
  import IconFileEdit from "$lib/icons/IconFileEdit.svelte";
  import IconFileHeart from "$lib/icons/IconFileHeart.svelte";
  import IconFileImage from "$lib/icons/IconFileImage.svelte";
  import IconFileInput from "$lib/icons/IconFileInput.svelte";
  import IconFileJson from "$lib/icons/IconFileJson.svelte";
  import IconFileJson2 from "$lib/icons/IconFileJson2.svelte";
  import IconFileKey from "$lib/icons/IconFileKey.svelte";
  import IconFileKey2 from "$lib/icons/IconFileKey2.svelte";
  import IconFileLineChart from "$lib/icons/IconFileLineChart.svelte";
  import IconFileLock from "$lib/icons/IconFileLock.svelte";
  import IconFileLock2 from "$lib/icons/IconFileLock2.svelte";
  import IconFileMinus from "$lib/icons/IconFileMinus.svelte";
  import IconFileMinus2 from "$lib/icons/IconFileMinus2.svelte";
  import IconFileOutput from "$lib/icons/IconFileOutput.svelte";
  import IconFilePieChart from "$lib/icons/IconFilePieChart.svelte";
  import IconFilePlus from "$lib/icons/IconFilePlus.svelte";
  import IconFilePlus2 from "$lib/icons/IconFilePlus2.svelte";
  import IconFileQuestion from "$lib/icons/IconFileQuestion.svelte";
  import IconFiles from "$lib/icons/IconFiles.svelte";
  import IconFileScan from "$lib/icons/IconFileScan.svelte";
  import IconFileSearch from "$lib/icons/IconFileSearch.svelte";
  import IconFileSearch2 from "$lib/icons/IconFileSearch2.svelte";
  import IconFileSignature from "$lib/icons/IconFileSignature.svelte";
  import IconFileSpreadsheet from "$lib/icons/IconFileSpreadsheet.svelte";
  import IconFileSymlink from "$lib/icons/IconFileSymlink.svelte";
  import IconFileTerminal from "$lib/icons/IconFileTerminal.svelte";
  import IconFileText from "$lib/icons/IconFileText.svelte";
  import IconFileType from "$lib/icons/IconFileType.svelte";
  import IconFileType2 from "$lib/icons/IconFileType2.svelte";
  import IconFileUp from "$lib/icons/IconFileUp.svelte";
  import IconFileVideo from "$lib/icons/IconFileVideo.svelte";
  import IconFileVideo2 from "$lib/icons/IconFileVideo2.svelte";
  import IconFileVolume from "$lib/icons/IconFileVolume.svelte";
  import IconFileVolume2 from "$lib/icons/IconFileVolume2.svelte";
  import IconFileWarning from "$lib/icons/IconFileWarning.svelte";
  import IconFileX from "$lib/icons/IconFileX.svelte";
  import IconFileX2 from "$lib/icons/IconFileX2.svelte";
  import IconFilm from "$lib/icons/IconFilm.svelte";
  import IconFilter from "$lib/icons/IconFilter.svelte";
  import IconFingerprint from "$lib/icons/IconFingerprint.svelte";
  import IconFlag from "$lib/icons/IconFlag.svelte";
  import IconFlagOff from "$lib/icons/IconFlagOff.svelte";
  import IconFlagTriangleLeft from "$lib/icons/IconFlagTriangleLeft.svelte";
  import IconFlagTriangleRight from "$lib/icons/IconFlagTriangleRight.svelte";
  import IconFlame from "$lib/icons/IconFlame.svelte";
  import IconFlashlight from "$lib/icons/IconFlashlight.svelte";
  import IconFlashlightOff from "$lib/icons/IconFlashlightOff.svelte";
  import IconFlaskConical from "$lib/icons/IconFlaskConical.svelte";
  import IconFlaskConicalOff from "$lib/icons/IconFlaskConicalOff.svelte";
  import IconFlaskRound from "$lib/icons/IconFlaskRound.svelte";
  import IconFlipHorizontal from "$lib/icons/IconFlipHorizontal.svelte";
  import IconFlipHorizontal2 from "$lib/icons/IconFlipHorizontal2.svelte";
  import IconFlipVertical from "$lib/icons/IconFlipVertical.svelte";
  import IconFlipVertical2 from "$lib/icons/IconFlipVertical2.svelte";
  import IconFlower from "$lib/icons/IconFlower.svelte";
  import IconFlower2 from "$lib/icons/IconFlower2.svelte";
  import IconFocus from "$lib/icons/IconFocus.svelte";
  import IconFolder from "$lib/icons/IconFolder.svelte";
  import IconFolderArchive from "$lib/icons/IconFolderArchive.svelte";
  import IconFolderCheck from "$lib/icons/IconFolderCheck.svelte";
  import IconFolderClock from "$lib/icons/IconFolderClock.svelte";
  import IconFolderClosed from "$lib/icons/IconFolderClosed.svelte";
  import IconFolderCog from "$lib/icons/IconFolderCog.svelte";
  import IconFolderCog2 from "$lib/icons/IconFolderCog2.svelte";
  import IconFolderDown from "$lib/icons/IconFolderDown.svelte";
  import IconFolderEdit from "$lib/icons/IconFolderEdit.svelte";
  import IconFolderHeart from "$lib/icons/IconFolderHeart.svelte";
  import IconFolderInput from "$lib/icons/IconFolderInput.svelte";
  import IconFolderKey from "$lib/icons/IconFolderKey.svelte";
  import IconFolderLock from "$lib/icons/IconFolderLock.svelte";
  import IconFolderMinus from "$lib/icons/IconFolderMinus.svelte";
  import IconFolderOpen from "$lib/icons/IconFolderOpen.svelte";
  import IconFolderOutput from "$lib/icons/IconFolderOutput.svelte";
  import IconFolderPlus from "$lib/icons/IconFolderPlus.svelte";
  import IconFolders from "$lib/icons/IconFolders.svelte";
  import IconFolderSearch from "$lib/icons/IconFolderSearch.svelte";
  import IconFolderSearch2 from "$lib/icons/IconFolderSearch2.svelte";
  import IconFolderSymlink from "$lib/icons/IconFolderSymlink.svelte";
  import IconFolderTree from "$lib/icons/IconFolderTree.svelte";
  import IconFolderUp from "$lib/icons/IconFolderUp.svelte";
  import IconFolderX from "$lib/icons/IconFolderX.svelte";
  import IconFormInput from "$lib/icons/IconFormInput.svelte";
  import IconForward from "$lib/icons/IconForward.svelte";
  import IconFrame from "$lib/icons/IconFrame.svelte";
  import IconFramer from "$lib/icons/IconFramer.svelte";
  import IconFrown from "$lib/icons/IconFrown.svelte";
  import IconFuel from "$lib/icons/IconFuel.svelte";
  import IconFunctionSquare from "$lib/icons/IconFunctionSquare.svelte";
  import IconGamepad from "$lib/icons/IconGamepad.svelte";
  import IconGamepad2 from "$lib/icons/IconGamepad2.svelte";
  import IconGauge from "$lib/icons/IconGauge.svelte";
  import IconGavel from "$lib/icons/IconGavel.svelte";
  import IconGem from "$lib/icons/IconGem.svelte";
  import IconGhost from "$lib/icons/IconGhost.svelte";
  import IconGift from "$lib/icons/IconGift.svelte";
  import IconGitBranch from "$lib/icons/IconGitBranch.svelte";
  import IconGitBranchPlus from "$lib/icons/IconGitBranchPlus.svelte";
  import IconGitCommit from "$lib/icons/IconGitCommit.svelte";
  import IconGitCompare from "$lib/icons/IconGitCompare.svelte";
  import IconGitFork from "$lib/icons/IconGitFork.svelte";
  import IconGithub from "$lib/icons/IconGithub.svelte";
  import IconGitlab from "$lib/icons/IconGitlab.svelte";
  import IconGitMerge from "$lib/icons/IconGitMerge.svelte";
  import IconGitPullRequest from "$lib/icons/IconGitPullRequest.svelte";
  import IconGitPullRequestClosed from "$lib/icons/IconGitPullRequestClosed.svelte";
  import IconGitPullRequestDraft from "$lib/icons/IconGitPullRequestDraft.svelte";
  import IconGlasses from "$lib/icons/IconGlasses.svelte";
  import IconGlassWater from "$lib/icons/IconGlassWater.svelte";
  import IconGlobe from "$lib/icons/IconGlobe.svelte";
  import IconGlobe2 from "$lib/icons/IconGlobe2.svelte";
  import IconGrab from "$lib/icons/IconGrab.svelte";
  import IconGraduationCap from "$lib/icons/IconGraduationCap.svelte";
  import IconGrape from "$lib/icons/IconGrape.svelte";
  import IconGrid from "$lib/icons/IconGrid.svelte";
  import IconGripHorizontal from "$lib/icons/IconGripHorizontal.svelte";
  import IconGripVertical from "$lib/icons/IconGripVertical.svelte";
  import IconHammer from "$lib/icons/IconHammer.svelte";
  import IconHand from "$lib/icons/IconHand.svelte";
  import IconHandMetal from "$lib/icons/IconHandMetal.svelte";
  import IconHardDrive from "$lib/icons/IconHardDrive.svelte";
  import IconHardHat from "$lib/icons/IconHardHat.svelte";
  import IconHash from "$lib/icons/IconHash.svelte";
  import IconHaze from "$lib/icons/IconHaze.svelte";
  import IconHeading from "$lib/icons/IconHeading.svelte";
  import IconHeading1 from "$lib/icons/IconHeading1.svelte";
  import IconHeading2 from "$lib/icons/IconHeading2.svelte";
  import IconHeading3 from "$lib/icons/IconHeading3.svelte";
  import IconHeading4 from "$lib/icons/IconHeading4.svelte";
  import IconHeading5 from "$lib/icons/IconHeading5.svelte";
  import IconHeading6 from "$lib/icons/IconHeading6.svelte";
  import IconHeadphones from "$lib/icons/IconHeadphones.svelte";
  import IconHeart from "$lib/icons/IconHeart.svelte";
  import IconHeartCrack from "$lib/icons/IconHeartCrack.svelte";
  import IconHeartHandshake from "$lib/icons/IconHeartHandshake.svelte";
  import IconHeartOff from "$lib/icons/IconHeartOff.svelte";
  import IconHeartPulse from "$lib/icons/IconHeartPulse.svelte";
  import IconHelpCircle from "$lib/icons/IconHelpCircle.svelte";
  import IconHexagon from "$lib/icons/IconHexagon.svelte";
  import IconHighlighter from "$lib/icons/IconHighlighter.svelte";
  import IconHistory from "$lib/icons/IconHistory.svelte";
  import IconHome from "$lib/icons/IconHome.svelte";
  import IconHop from "$lib/icons/IconHop.svelte";
  import IconHopOff from "$lib/icons/IconHopOff.svelte";
  import IconHourglass from "$lib/icons/IconHourglass.svelte";
  import IconIceCream from "$lib/icons/IconIceCream.svelte";
  import IconImage from "$lib/icons/IconImage.svelte";
  import IconImageMinus from "$lib/icons/IconImageMinus.svelte";
  import IconImageOff from "$lib/icons/IconImageOff.svelte";
  import IconImagePlus from "$lib/icons/IconImagePlus.svelte";
  import IconImport from "$lib/icons/IconImport.svelte";
  import IconInbox from "$lib/icons/IconInbox.svelte";
  import IconIndent from "$lib/icons/IconIndent.svelte";
  import IconIndianRupee from "$lib/icons/IconIndianRupee.svelte";
  import IconInfinity from "$lib/icons/IconInfinity.svelte";
  import IconInfo from "$lib/icons/IconInfo.svelte";
  import IconInspect from "$lib/icons/IconInspect.svelte";
  import IconInstagram from "$lib/icons/IconInstagram.svelte";
  import IconItalic from "$lib/icons/IconItalic.svelte";
  import IconJapaneseYen from "$lib/icons/IconJapaneseYen.svelte";
  import IconJoystick from "$lib/icons/IconJoystick.svelte";
  import IconKey from "$lib/icons/IconKey.svelte";
  import IconKeyboard from "$lib/icons/IconKeyboard.svelte";
  import IconLamp from "$lib/icons/IconLamp.svelte";
  import IconLampCeiling from "$lib/icons/IconLampCeiling.svelte";
  import IconLampDesk from "$lib/icons/IconLampDesk.svelte";
  import IconLampFloor from "$lib/icons/IconLampFloor.svelte";
  import IconLampWallDown from "$lib/icons/IconLampWallDown.svelte";
  import IconLampWallUp from "$lib/icons/IconLampWallUp.svelte";
  import IconLandmark from "$lib/icons/IconLandmark.svelte";
  import IconLanguages from "$lib/icons/IconLanguages.svelte";
  import IconLaptop from "$lib/icons/IconLaptop.svelte";
  import IconLaptop2 from "$lib/icons/IconLaptop2.svelte";
  import IconLasso from "$lib/icons/IconLasso.svelte";
  import IconLassoSelect from "$lib/icons/IconLassoSelect.svelte";
  import IconLaugh from "$lib/icons/IconLaugh.svelte";
  import IconLayers from "$lib/icons/IconLayers.svelte";
  import IconLayout from "$lib/icons/IconLayout.svelte";
  import IconLayoutDashboard from "$lib/icons/IconLayoutDashboard.svelte";
  import IconLayoutGrid from "$lib/icons/IconLayoutGrid.svelte";
  import IconLayoutList from "$lib/icons/IconLayoutList.svelte";
  import IconLayoutTemplate from "$lib/icons/IconLayoutTemplate.svelte";
  import IconLeaf from "$lib/icons/IconLeaf.svelte";
  import IconLibrary from "$lib/icons/IconLibrary.svelte";
  import IconLifeBuoy from "$lib/icons/IconLifeBuoy.svelte";
  import IconLightbulb from "$lib/icons/IconLightbulb.svelte";
  import IconLightbulbOff from "$lib/icons/IconLightbulbOff.svelte";
  import IconLineChart from "$lib/icons/IconLineChart.svelte";
  import IconLink from "$lib/icons/IconLink.svelte";
  import IconLink2 from "$lib/icons/IconLink2.svelte";
  import IconLink2Off from "$lib/icons/IconLink2Off.svelte";
  import IconLinkedin from "$lib/icons/IconLinkedin.svelte";
  import IconList from "$lib/icons/IconList.svelte";
  import IconListChecks from "$lib/icons/IconListChecks.svelte";
  import IconListEnd from "$lib/icons/IconListEnd.svelte";
  import IconListMinus from "$lib/icons/IconListMinus.svelte";
  import IconListMusic from "$lib/icons/IconListMusic.svelte";
  import IconListOrdered from "$lib/icons/IconListOrdered.svelte";
  import IconListPlus from "$lib/icons/IconListPlus.svelte";
  import IconListStart from "$lib/icons/IconListStart.svelte";
  import IconListVideo from "$lib/icons/IconListVideo.svelte";
  import IconListX from "$lib/icons/IconListX.svelte";
  import IconLoader from "$lib/icons/IconLoader.svelte";
  import IconLoader2 from "$lib/icons/IconLoader2.svelte";
  import IconLocate from "$lib/icons/IconLocate.svelte";
  import IconLocateFixed from "$lib/icons/IconLocateFixed.svelte";
  import IconLocateOff from "$lib/icons/IconLocateOff.svelte";
  import IconLock from "$lib/icons/IconLock.svelte";
  import IconLogIn from "$lib/icons/IconLogIn.svelte";
  import IconLogOut from "$lib/icons/IconLogOut.svelte";
  import IconLuggage from "$lib/icons/IconLuggage.svelte";
  import IconMagnet from "$lib/icons/IconMagnet.svelte";
  import IconMail from "$lib/icons/IconMail.svelte";
  import IconMailCheck from "$lib/icons/IconMailCheck.svelte";
  import IconMailMinus from "$lib/icons/IconMailMinus.svelte";
  import IconMailOpen from "$lib/icons/IconMailOpen.svelte";
  import IconMailPlus from "$lib/icons/IconMailPlus.svelte";
  import IconMailQuestion from "$lib/icons/IconMailQuestion.svelte";
  import IconMails from "$lib/icons/IconMails.svelte";
  import IconMailSearch from "$lib/icons/IconMailSearch.svelte";
  import IconMailWarning from "$lib/icons/IconMailWarning.svelte";
  import IconMailX from "$lib/icons/IconMailX.svelte";
  import IconMap from "$lib/icons/IconMap.svelte";
  import IconMapPin from "$lib/icons/IconMapPin.svelte";
  import IconMapPinOff from "$lib/icons/IconMapPinOff.svelte";
  import IconMartini from "$lib/icons/IconMartini.svelte";
  import IconMaximize from "$lib/icons/IconMaximize.svelte";
  import IconMaximize2 from "$lib/icons/IconMaximize2.svelte";
  import IconMedal from "$lib/icons/IconMedal.svelte";
  import IconMegaphone from "$lib/icons/IconMegaphone.svelte";
  import IconMegaphoneOff from "$lib/icons/IconMegaphoneOff.svelte";
  import IconMeh from "$lib/icons/IconMeh.svelte";
  import IconMenu from "$lib/icons/IconMenu.svelte";
  import IconMessageCircle from "$lib/icons/IconMessageCircle.svelte";
  import IconMessageSquare from "$lib/icons/IconMessageSquare.svelte";
  import IconMic from "$lib/icons/IconMic.svelte";
  import IconMic2 from "$lib/icons/IconMic2.svelte";
  import IconMicOff from "$lib/icons/IconMicOff.svelte";
  import IconMicroscope from "$lib/icons/IconMicroscope.svelte";
  import IconMicrowave from "$lib/icons/IconMicrowave.svelte";
  import IconMilestone from "$lib/icons/IconMilestone.svelte";
  import IconMilk from "$lib/icons/IconMilk.svelte";
  import IconMilkOff from "$lib/icons/IconMilkOff.svelte";
  import IconMinimize from "$lib/icons/IconMinimize.svelte";
  import IconMinimize2 from "$lib/icons/IconMinimize2.svelte";
  import IconMinus from "$lib/icons/IconMinus.svelte";
  import IconMinusCircle from "$lib/icons/IconMinusCircle.svelte";
  import IconMinusSquare from "$lib/icons/IconMinusSquare.svelte";
  import IconMonitor from "$lib/icons/IconMonitor.svelte";
  import IconMonitorOff from "$lib/icons/IconMonitorOff.svelte";
  import IconMonitorSmartphone from "$lib/icons/IconMonitorSmartphone.svelte";
  import IconMonitorSpeaker from "$lib/icons/IconMonitorSpeaker.svelte";
  import IconMoon from "$lib/icons/IconMoon.svelte";
  import IconMoreHorizontal from "$lib/icons/IconMoreHorizontal.svelte";
  import IconMoreVertical from "$lib/icons/IconMoreVertical.svelte";
  import IconMountain from "$lib/icons/IconMountain.svelte";
  import IconMountainSnow from "$lib/icons/IconMountainSnow.svelte";
  import IconMouse from "$lib/icons/IconMouse.svelte";
  import IconMousePointer from "$lib/icons/IconMousePointer.svelte";
  import IconMousePointer2 from "$lib/icons/IconMousePointer2.svelte";
  import IconMousePointerClick from "$lib/icons/IconMousePointerClick.svelte";
  import IconMove from "$lib/icons/IconMove.svelte";
  import IconMove3D from "$lib/icons/IconMove3D.svelte";
  import IconMoveDiagonal from "$lib/icons/IconMoveDiagonal.svelte";
  import IconMoveDiagonal2 from "$lib/icons/IconMoveDiagonal2.svelte";
  import IconMoveHorizontal from "$lib/icons/IconMoveHorizontal.svelte";
  import IconMoveVertical from "$lib/icons/IconMoveVertical.svelte";
  import IconMusic from "$lib/icons/IconMusic.svelte";
  import IconMusic2 from "$lib/icons/IconMusic2.svelte";
  import IconMusic3 from "$lib/icons/IconMusic3.svelte";
  import IconMusic4 from "$lib/icons/IconMusic4.svelte";
  import IconNavigation from "$lib/icons/IconNavigation.svelte";
  import IconNavigation2 from "$lib/icons/IconNavigation2.svelte";
  import IconNavigation2Off from "$lib/icons/IconNavigation2Off.svelte";
  import IconNavigationOff from "$lib/icons/IconNavigationOff.svelte";
  import IconNetwork from "$lib/icons/IconNetwork.svelte";
  import IconNewspaper from "$lib/icons/IconNewspaper.svelte";
  import IconNut from "$lib/icons/IconNut.svelte";
  import IconNutOff from "$lib/icons/IconNutOff.svelte";
  import IconOctagon from "$lib/icons/IconOctagon.svelte";
  import IconOption from "$lib/icons/IconOption.svelte";
  import IconOutdent from "$lib/icons/IconOutdent.svelte";
  import IconPackage from "$lib/icons/IconPackage.svelte";
  import IconPackage2 from "$lib/icons/IconPackage2.svelte";
  import IconPackageCheck from "$lib/icons/IconPackageCheck.svelte";
  import IconPackageMinus from "$lib/icons/IconPackageMinus.svelte";
  import IconPackageOpen from "$lib/icons/IconPackageOpen.svelte";
  import IconPackagePlus from "$lib/icons/IconPackagePlus.svelte";
  import IconPackageSearch from "$lib/icons/IconPackageSearch.svelte";
  import IconPackageX from "$lib/icons/IconPackageX.svelte";
  import IconPaintbrush from "$lib/icons/IconPaintbrush.svelte";
  import IconPaintbrush2 from "$lib/icons/IconPaintbrush2.svelte";
  import IconPaintBucket from "$lib/icons/IconPaintBucket.svelte";
  import IconPalette from "$lib/icons/IconPalette.svelte";
  import IconPalmtree from "$lib/icons/IconPalmtree.svelte";
  import IconPaperclip from "$lib/icons/IconPaperclip.svelte";
  import IconPartyPopper from "$lib/icons/IconPartyPopper.svelte";
  import IconPause from "$lib/icons/IconPause.svelte";
  import IconPauseCircle from "$lib/icons/IconPauseCircle.svelte";
  import IconPauseOctagon from "$lib/icons/IconPauseOctagon.svelte";
  import IconPencil from "$lib/icons/IconPencil.svelte";
  import IconPenTool from "$lib/icons/IconPenTool.svelte";
  import IconPercent from "$lib/icons/IconPercent.svelte";
  import IconPersonStanding from "$lib/icons/IconPersonStanding.svelte";
  import IconPhone from "$lib/icons/IconPhone.svelte";
  import IconPhoneCall from "$lib/icons/IconPhoneCall.svelte";
  import IconPhoneForwarded from "$lib/icons/IconPhoneForwarded.svelte";
  import IconPhoneIncoming from "$lib/icons/IconPhoneIncoming.svelte";
  import IconPhoneMissed from "$lib/icons/IconPhoneMissed.svelte";
  import IconPhoneOff from "$lib/icons/IconPhoneOff.svelte";
  import IconPhoneOutgoing from "$lib/icons/IconPhoneOutgoing.svelte";
  import IconPieChart from "$lib/icons/IconPieChart.svelte";
  import IconPiggyBank from "$lib/icons/IconPiggyBank.svelte";
  import IconPilcrow from "$lib/icons/IconPilcrow.svelte";
  import IconPin from "$lib/icons/IconPin.svelte";
  import IconPinOff from "$lib/icons/IconPinOff.svelte";
  import IconPipette from "$lib/icons/IconPipette.svelte";
  import IconPizza from "$lib/icons/IconPizza.svelte";
  import IconPlane from "$lib/icons/IconPlane.svelte";
  import IconPlay from "$lib/icons/IconPlay.svelte";
  import IconPlayCircle from "$lib/icons/IconPlayCircle.svelte";
  import IconPlug from "$lib/icons/IconPlug.svelte";
  import IconPlug2 from "$lib/icons/IconPlug2.svelte";
  import IconPlugZap from "$lib/icons/IconPlugZap.svelte";
  import IconPlus from "$lib/icons/IconPlus.svelte";
  import IconPlusCircle from "$lib/icons/IconPlusCircle.svelte";
  import IconPlusSquare from "$lib/icons/IconPlusSquare.svelte";
  import IconPocket from "$lib/icons/IconPocket.svelte";
  import IconPodcast from "$lib/icons/IconPodcast.svelte";
  import IconPointer from "$lib/icons/IconPointer.svelte";
  import IconPoundSterling from "$lib/icons/IconPoundSterling.svelte";
  import IconPower from "$lib/icons/IconPower.svelte";
  import IconPowerOff from "$lib/icons/IconPowerOff.svelte";
  import IconPrinter from "$lib/icons/IconPrinter.svelte";
  import IconPuzzle from "$lib/icons/IconPuzzle.svelte";
  import IconQrCode from "$lib/icons/IconQrCode.svelte";
  import IconQuote from "$lib/icons/IconQuote.svelte";
  import IconRadio from "$lib/icons/IconRadio.svelte";
  import IconRadioReceiver from "$lib/icons/IconRadioReceiver.svelte";
  import IconRectangleHorizontal from "$lib/icons/IconRectangleHorizontal.svelte";
  import IconRectangleVertical from "$lib/icons/IconRectangleVertical.svelte";
  import IconRecycle from "$lib/icons/IconRecycle.svelte";
  import IconRedo from "$lib/icons/IconRedo.svelte";
  import IconRedo2 from "$lib/icons/IconRedo2.svelte";
  import IconRefreshCcw from "$lib/icons/IconRefreshCcw.svelte";
  import IconRefreshCw from "$lib/icons/IconRefreshCw.svelte";
  import IconRefrigerator from "$lib/icons/IconRefrigerator.svelte";
  import IconRegex from "$lib/icons/IconRegex.svelte";
  import IconRepeat from "$lib/icons/IconRepeat.svelte";
  import IconRepeat1 from "$lib/icons/IconRepeat1.svelte";
  import IconReply from "$lib/icons/IconReply.svelte";
  import IconReplyAll from "$lib/icons/IconReplyAll.svelte";
  import IconRewind from "$lib/icons/IconRewind.svelte";
  import IconRocket from "$lib/icons/IconRocket.svelte";
  import IconRockingChair from "$lib/icons/IconRockingChair.svelte";
  import IconRotate3D from "$lib/icons/IconRotate3D.svelte";
  import IconRotateCcw from "$lib/icons/IconRotateCcw.svelte";
  import IconRotateCw from "$lib/icons/IconRotateCw.svelte";
  import IconRss from "$lib/icons/IconRss.svelte";
  import IconRuler from "$lib/icons/IconRuler.svelte";
  import IconRussianRuble from "$lib/icons/IconRussianRuble.svelte";
  import IconSailboat from "$lib/icons/IconSailboat.svelte";
  import IconSave from "$lib/icons/IconSave.svelte";
  import IconScale from "$lib/icons/IconScale.svelte";
  import IconScale3D from "$lib/icons/IconScale3D.svelte";
  import IconScaling from "$lib/icons/IconScaling.svelte";
  import IconScan from "$lib/icons/IconScan.svelte";
  import IconScanFace from "$lib/icons/IconScanFace.svelte";
  import IconScanLine from "$lib/icons/IconScanLine.svelte";
  import IconScissors from "$lib/icons/IconScissors.svelte";
  import IconScreenShare from "$lib/icons/IconScreenShare.svelte";
  import IconScreenShareOff from "$lib/icons/IconScreenShareOff.svelte";
  import IconScroll from "$lib/icons/IconScroll.svelte";
  import IconSearch from "$lib/icons/IconSearch.svelte";
  import IconSend from "$lib/icons/IconSend.svelte";
  import IconSeparatorHorizontal from "$lib/icons/IconSeparatorHorizontal.svelte";
  import IconSeparatorVertical from "$lib/icons/IconSeparatorVertical.svelte";
  import IconServer from "$lib/icons/IconServer.svelte";
  import IconServerCog from "$lib/icons/IconServerCog.svelte";
  import IconServerCrash from "$lib/icons/IconServerCrash.svelte";
  import IconServerOff from "$lib/icons/IconServerOff.svelte";
  import IconSettings from "$lib/icons/IconSettings.svelte";
  import IconSettings2 from "$lib/icons/IconSettings2.svelte";
  import IconShare from "$lib/icons/IconShare.svelte";
  import IconShare2 from "$lib/icons/IconShare2.svelte";
  import IconSheet from "$lib/icons/IconSheet.svelte";
  import IconShield from "$lib/icons/IconShield.svelte";
  import IconShieldAlert from "$lib/icons/IconShieldAlert.svelte";
  import IconShieldCheck from "$lib/icons/IconShieldCheck.svelte";
  import IconShieldClose from "$lib/icons/IconShieldClose.svelte";
  import IconShieldOff from "$lib/icons/IconShieldOff.svelte";
  import IconShirt from "$lib/icons/IconShirt.svelte";
  import IconShoppingBag from "$lib/icons/IconShoppingBag.svelte";
  import IconShoppingCart from "$lib/icons/IconShoppingCart.svelte";
  import IconShovel from "$lib/icons/IconShovel.svelte";
  import IconShowerHead from "$lib/icons/IconShowerHead.svelte";
  import IconShrink from "$lib/icons/IconShrink.svelte";
  import IconShrub from "$lib/icons/IconShrub.svelte";
  import IconShuffle from "$lib/icons/IconShuffle.svelte";
  import IconSidebar from "$lib/icons/IconSidebar.svelte";
  import IconSidebarClose from "$lib/icons/IconSidebarClose.svelte";
  import IconSidebarOpen from "$lib/icons/IconSidebarOpen.svelte";
  import IconSigma from "$lib/icons/IconSigma.svelte";
  import IconSignal from "$lib/icons/IconSignal.svelte";
  import IconSignalHigh from "$lib/icons/IconSignalHigh.svelte";
  import IconSignalLow from "$lib/icons/IconSignalLow.svelte";
  import IconSignalMedium from "$lib/icons/IconSignalMedium.svelte";
  import IconSignalZero from "$lib/icons/IconSignalZero.svelte";
  import IconSiren from "$lib/icons/IconSiren.svelte";
  import IconSkipBack from "$lib/icons/IconSkipBack.svelte";
  import IconSkipForward from "$lib/icons/IconSkipForward.svelte";
  import IconSkull from "$lib/icons/IconSkull.svelte";
  import IconSlack from "$lib/icons/IconSlack.svelte";
  import IconSlash from "$lib/icons/IconSlash.svelte";
  import IconSlice from "$lib/icons/IconSlice.svelte";
  import IconSliders from "$lib/icons/IconSliders.svelte";
  import IconSlidersHorizontal from "$lib/icons/IconSlidersHorizontal.svelte";
  import IconSmartphone from "$lib/icons/IconSmartphone.svelte";
  import IconSmartphoneCharging from "$lib/icons/IconSmartphoneCharging.svelte";
  import IconSmile from "$lib/icons/IconSmile.svelte";
  import IconSmilePlus from "$lib/icons/IconSmilePlus.svelte";
  import IconSnowflake from "$lib/icons/IconSnowflake.svelte";
  import IconSofa from "$lib/icons/IconSofa.svelte";
  import IconSortAsc from "$lib/icons/IconSortAsc.svelte";
  import IconSortDesc from "$lib/icons/IconSortDesc.svelte";
  import IconSpeaker from "$lib/icons/IconSpeaker.svelte";
  import IconSpline from "$lib/icons/IconSpline.svelte";
  import IconSprout from "$lib/icons/IconSprout.svelte";
  import IconSquare from "$lib/icons/IconSquare.svelte";
  import IconStar from "$lib/icons/IconStar.svelte";
  import IconStarHalf from "$lib/icons/IconStarHalf.svelte";
  import IconStarOff from "$lib/icons/IconStarOff.svelte";
  import IconStethoscope from "$lib/icons/IconStethoscope.svelte";
  import IconSticker from "$lib/icons/IconSticker.svelte";
  import IconStickyNote from "$lib/icons/IconStickyNote.svelte";
  import IconStopCircle from "$lib/icons/IconStopCircle.svelte";
  import IconStretchHorizontal from "$lib/icons/IconStretchHorizontal.svelte";
  import IconStretchVertical from "$lib/icons/IconStretchVertical.svelte";
  import IconStrikethrough from "$lib/icons/IconStrikethrough.svelte";
  import IconSubscript from "$lib/icons/IconSubscript.svelte";
  import IconSubtitles from "$lib/icons/IconSubtitles.svelte";
  import IconSun from "$lib/icons/IconSun.svelte";
  import IconSunDim from "$lib/icons/IconSunDim.svelte";
  import IconSunMedium from "$lib/icons/IconSunMedium.svelte";
  import IconSunMoon from "$lib/icons/IconSunMoon.svelte";
  import IconSunrise from "$lib/icons/IconSunrise.svelte";
  import IconSunset from "$lib/icons/IconSunset.svelte";
  import IconSunSnow from "$lib/icons/IconSunSnow.svelte";
  import IconSuperscript from "$lib/icons/IconSuperscript.svelte";
  import IconSwissFranc from "$lib/icons/IconSwissFranc.svelte";
  import IconSwitchCamera from "$lib/icons/IconSwitchCamera.svelte";
  import IconSword from "$lib/icons/IconSword.svelte";
  import IconSwords from "$lib/icons/IconSwords.svelte";
  import IconSyringe from "$lib/icons/IconSyringe.svelte";
  import IconTable from "$lib/icons/IconTable.svelte";
  import IconTable2 from "$lib/icons/IconTable2.svelte";
  import IconTablet from "$lib/icons/IconTablet.svelte";
  import IconTag from "$lib/icons/IconTag.svelte";
  import IconTags from "$lib/icons/IconTags.svelte";
  import IconTarget from "$lib/icons/IconTarget.svelte";
  import IconTent from "$lib/icons/IconTent.svelte";
  import IconTerminal from "$lib/icons/IconTerminal.svelte";
  import IconTerminalSquare from "$lib/icons/IconTerminalSquare.svelte";
  import IconTextCursor from "$lib/icons/IconTextCursor.svelte";
  import IconTextCursorInput from "$lib/icons/IconTextCursorInput.svelte";
  import IconThermometer from "$lib/icons/IconThermometer.svelte";
  import IconThermometerSnowflake from "$lib/icons/IconThermometerSnowflake.svelte";
  import IconThermometerSun from "$lib/icons/IconThermometerSun.svelte";
  import IconThumbsDown from "$lib/icons/IconThumbsDown.svelte";
  import IconThumbsUp from "$lib/icons/IconThumbsUp.svelte";
  import IconTicket from "$lib/icons/IconTicket.svelte";
  import IconTimer from "$lib/icons/IconTimer.svelte";
  import IconTimerOff from "$lib/icons/IconTimerOff.svelte";
  import IconTimerReset from "$lib/icons/IconTimerReset.svelte";
  import IconToggleLeft from "$lib/icons/IconToggleLeft.svelte";
  import IconToggleRight from "$lib/icons/IconToggleRight.svelte";
  import IconTornado from "$lib/icons/IconTornado.svelte";
  import IconToyBrick from "$lib/icons/IconToyBrick.svelte";
  import IconTrain from "$lib/icons/IconTrain.svelte";
  import IconTrash from "$lib/icons/IconTrash.svelte";
  import IconTrash2 from "$lib/icons/IconTrash2.svelte";
  import IconTreeDeciduous from "$lib/icons/IconTreeDeciduous.svelte";
  import IconTreePine from "$lib/icons/IconTreePine.svelte";
  import IconTrees from "$lib/icons/IconTrees.svelte";
  import IconTrello from "$lib/icons/IconTrello.svelte";
  import IconTrendingDown from "$lib/icons/IconTrendingDown.svelte";
  import IconTrendingUp from "$lib/icons/IconTrendingUp.svelte";
  import IconTriangle from "$lib/icons/IconTriangle.svelte";
  import IconTrophy from "$lib/icons/IconTrophy.svelte";
  import IconTruck from "$lib/icons/IconTruck.svelte";
  import IconTv from "$lib/icons/IconTv.svelte";
  import IconTv2 from "$lib/icons/IconTv2.svelte";
  import IconTwitch from "$lib/icons/IconTwitch.svelte";
  import IconTwitter from "$lib/icons/IconTwitter.svelte";
  import IconType from "$lib/icons/IconType.svelte";
  import IconUmbrella from "$lib/icons/IconUmbrella.svelte";
  import IconUnderline from "$lib/icons/IconUnderline.svelte";
  import IconUndo from "$lib/icons/IconUndo.svelte";
  import IconUndo2 from "$lib/icons/IconUndo2.svelte";
  import IconUnlink from "$lib/icons/IconUnlink.svelte";
  import IconUnlink2 from "$lib/icons/IconUnlink2.svelte";
  import IconUnlock from "$lib/icons/IconUnlock.svelte";
  import IconUpload from "$lib/icons/IconUpload.svelte";
  import IconUploadCloud from "$lib/icons/IconUploadCloud.svelte";
  import IconUsb from "$lib/icons/IconUsb.svelte";
  import IconUser from "$lib/icons/IconUser.svelte";
  import IconUserCheck from "$lib/icons/IconUserCheck.svelte";
  import IconUserCog from "$lib/icons/IconUserCog.svelte";
  import IconUserMinus from "$lib/icons/IconUserMinus.svelte";
  import IconUserPlus from "$lib/icons/IconUserPlus.svelte";
  import IconUsers from "$lib/icons/IconUsers.svelte";
  import IconUserX from "$lib/icons/IconUserX.svelte";
  import IconUtensils from "$lib/icons/IconUtensils.svelte";
  import IconUtensilsCrossed from "$lib/icons/IconUtensilsCrossed.svelte";
  import IconVegan from "$lib/icons/IconVegan.svelte";
  import IconVenetianMask from "$lib/icons/IconVenetianMask.svelte";
  import IconVerified from "$lib/icons/IconVerified.svelte";
  import IconVibrate from "$lib/icons/IconVibrate.svelte";
  import IconVibrateOff from "$lib/icons/IconVibrateOff.svelte";
  import IconVideo from "$lib/icons/IconVideo.svelte";
  import IconVideoOff from "$lib/icons/IconVideoOff.svelte";
  import IconView from "$lib/icons/IconView.svelte";
  import IconVoicemail from "$lib/icons/IconVoicemail.svelte";
  import IconVolume from "$lib/icons/IconVolume.svelte";
  import IconVolume1 from "$lib/icons/IconVolume1.svelte";
  import IconVolume2 from "$lib/icons/IconVolume2.svelte";
  import IconVolumeX from "$lib/icons/IconVolumeX.svelte";
  import IconWallet from "$lib/icons/IconWallet.svelte";
  import IconWand from "$lib/icons/IconWand.svelte";
  import IconWand2 from "$lib/icons/IconWand2.svelte";
  import IconWatch from "$lib/icons/IconWatch.svelte";
  import IconWaves from "$lib/icons/IconWaves.svelte";
  import IconWebcam from "$lib/icons/IconWebcam.svelte";
  import IconWebhook from "$lib/icons/IconWebhook.svelte";
  import IconWheat from "$lib/icons/IconWheat.svelte";
  import IconWheatOff from "$lib/icons/IconWheatOff.svelte";
  import IconWifi from "$lib/icons/IconWifi.svelte";
  import IconWifiOff from "$lib/icons/IconWifiOff.svelte";
  import IconWind from "$lib/icons/IconWind.svelte";
  import IconWine from "$lib/icons/IconWine.svelte";
  import IconWineOff from "$lib/icons/IconWineOff.svelte";
  import IconWrapText from "$lib/icons/IconWrapText.svelte";
  import IconWrench from "$lib/icons/IconWrench.svelte";
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
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <Tooltip text="IconAccessibility" copy="IconAccessibility"><IconAccessibility size="lg" /></Tooltip>
    <Tooltip text="IconActivity" copy="IconActivity"><IconActivity size="lg" /></Tooltip>
    <Tooltip text="IconAirplay" copy="IconAirplay"><IconAirplay size="lg" /></Tooltip>
    <Tooltip text="IconAirVent" copy="IconAirVent"><IconAirVent size="lg" /></Tooltip>
    <Tooltip text="IconAlarmCheck" copy="IconAlarmCheck"><IconAlarmCheck size="lg" /></Tooltip>
    <Tooltip text="IconAlarmClock" copy="IconAlarmClock"><IconAlarmClock size="lg" /></Tooltip>
    <Tooltip text="IconAlarmClockOff" copy="IconAlarmClockOff"><IconAlarmClockOff size="lg" /></Tooltip>
    <Tooltip text="IconAlarmMinus" copy="IconAlarmMinus"><IconAlarmMinus size="lg" /></Tooltip>
    <Tooltip text="IconAlarmPlus" copy="IconAlarmPlus"><IconAlarmPlus size="lg" /></Tooltip>
    <Tooltip text="IconAlbum" copy="IconAlbum"><IconAlbum size="lg" /></Tooltip>
    <Tooltip text="IconAlertCircle" copy="IconAlertCircle"><IconAlertCircle size="lg" /></Tooltip>
    <Tooltip text="IconAlertOctagon" copy="IconAlertOctagon"><IconAlertOctagon size="lg" /></Tooltip>
    <Tooltip text="IconAlertTriangle" copy="IconAlertTriangle"><IconAlertTriangle size="lg" /></Tooltip>
    <Tooltip text="IconAlignCenter" copy="IconAlignCenter"><IconAlignCenter size="lg" /></Tooltip>
    <Tooltip text="IconAlignCenterHorizontal" copy="IconAlignCenterHorizontal"><IconAlignCenterHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconAlignCenterVertical" copy="IconAlignCenterVertical"><IconAlignCenterVertical size="lg" /></Tooltip>
    <Tooltip text="IconAlignEndHorizontal" copy="IconAlignEndHorizontal"><IconAlignEndHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconAlignEndVertical" copy="IconAlignEndVertical"><IconAlignEndVertical size="lg" /></Tooltip>
    <Tooltip text="IconAlignHorizontalDistributeCenter" copy="IconAlignHorizontalDistributeCenter"><IconAlignHorizontalDistributeCenter size="lg" /></Tooltip>
    <Tooltip text="IconAlignHorizontalDistributeEnd" copy="IconAlignHorizontalDistributeEnd"><IconAlignHorizontalDistributeEnd size="lg" /></Tooltip>
    <Tooltip text="IconAlignHorizontalDistributeStart" copy="IconAlignHorizontalDistributeStart"><IconAlignHorizontalDistributeStart size="lg" /></Tooltip>
    <Tooltip text="IconAlignHorizontalJustifyCenter" copy="IconAlignHorizontalJustifyCenter"><IconAlignHorizontalJustifyCenter size="lg" /></Tooltip>
    <Tooltip text="IconAlignHorizontalJustifyEnd" copy="IconAlignHorizontalJustifyEnd"><IconAlignHorizontalJustifyEnd size="lg" /></Tooltip>
    <Tooltip text="IconAlignHorizontalJustifyStart" copy="IconAlignHorizontalJustifyStart"><IconAlignHorizontalJustifyStart size="lg" /></Tooltip>
    <Tooltip text="IconAlignHorizontalSpaceAround" copy="IconAlignHorizontalSpaceAround"><IconAlignHorizontalSpaceAround size="lg" /></Tooltip>
    <Tooltip text="IconAlignHorizontalSpaceBetween" copy="IconAlignHorizontalSpaceBetween"><IconAlignHorizontalSpaceBetween size="lg" /></Tooltip>
    <Tooltip text="IconAlignJustify" copy="IconAlignJustify"><IconAlignJustify size="lg" /></Tooltip>
    <Tooltip text="IconAlignLeft" copy="IconAlignLeft"><IconAlignLeft size="lg" /></Tooltip>
    <Tooltip text="IconAlignRight" copy="IconAlignRight"><IconAlignRight size="lg" /></Tooltip>
    <Tooltip text="IconAlignStartHorizontal" copy="IconAlignStartHorizontal"><IconAlignStartHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconAlignStartVertical" copy="IconAlignStartVertical"><IconAlignStartVertical size="lg" /></Tooltip>
    <Tooltip text="IconAlignVerticalDistributeCenter" copy="IconAlignVerticalDistributeCenter"><IconAlignVerticalDistributeCenter size="lg" /></Tooltip>
    <Tooltip text="IconAlignVerticalDistributeEnd" copy="IconAlignVerticalDistributeEnd"><IconAlignVerticalDistributeEnd size="lg" /></Tooltip>
    <Tooltip text="IconAlignVerticalDistributeStart" copy="IconAlignVerticalDistributeStart"><IconAlignVerticalDistributeStart size="lg" /></Tooltip>
    <Tooltip text="IconAlignVerticalJustifyCenter" copy="IconAlignVerticalJustifyCenter"><IconAlignVerticalJustifyCenter size="lg" /></Tooltip>
    <Tooltip text="IconAlignVerticalJustifyEnd" copy="IconAlignVerticalJustifyEnd"><IconAlignVerticalJustifyEnd size="lg" /></Tooltip>
    <Tooltip text="IconAlignVerticalJustifyStart" copy="IconAlignVerticalJustifyStart"><IconAlignVerticalJustifyStart size="lg" /></Tooltip>
    <Tooltip text="IconAlignVerticalSpaceAround" copy="IconAlignVerticalSpaceAround"><IconAlignVerticalSpaceAround size="lg" /></Tooltip>
    <Tooltip text="IconAlignVerticalSpaceBetween" copy="IconAlignVerticalSpaceBetween"><IconAlignVerticalSpaceBetween size="lg" /></Tooltip>
    <Tooltip text="IconAnchor" copy="IconAnchor"><IconAnchor size="lg" /></Tooltip>
    <Tooltip text="IconAngry" copy="IconAngry"><IconAngry size="lg" /></Tooltip>
    <Tooltip text="IconAnnoyed" copy="IconAnnoyed"><IconAnnoyed size="lg" /></Tooltip>
    <Tooltip text="IconAperture" copy="IconAperture"><IconAperture size="lg" /></Tooltip>
    <Tooltip text="IconApple" copy="IconApple"><IconApple size="lg" /></Tooltip>
    <Tooltip text="IconArchive" copy="IconArchive"><IconArchive size="lg" /></Tooltip>
    <Tooltip text="IconArchiveRestore" copy="IconArchiveRestore"><IconArchiveRestore size="lg" /></Tooltip>
    <Tooltip text="IconArmchair" copy="IconArmchair"><IconArmchair size="lg" /></Tooltip>
    <Tooltip text="IconArrowBigDown" copy="IconArrowBigDown"><IconArrowBigDown size="lg" /></Tooltip>
    <Tooltip text="IconArrowBigLeft" copy="IconArrowBigLeft"><IconArrowBigLeft size="lg" /></Tooltip>
    <Tooltip text="IconArrowBigRight" copy="IconArrowBigRight"><IconArrowBigRight size="lg" /></Tooltip>
    <Tooltip text="IconArrowBigUp" copy="IconArrowBigUp"><IconArrowBigUp size="lg" /></Tooltip>
    <Tooltip text="IconArrowDown" copy="IconArrowDown"><IconArrowDown size="lg" /></Tooltip>
    <Tooltip text="IconArrowDownCircle" copy="IconArrowDownCircle"><IconArrowDownCircle size="lg" /></Tooltip>
    <Tooltip text="IconArrowDownLeft" copy="IconArrowDownLeft"><IconArrowDownLeft size="lg" /></Tooltip>
    <Tooltip text="IconArrowDownRight" copy="IconArrowDownRight"><IconArrowDownRight size="lg" /></Tooltip>
    <Tooltip text="IconArrowLeft" copy="IconArrowLeft"><IconArrowLeft size="lg" /></Tooltip>
    <Tooltip text="IconArrowLeftCircle" copy="IconArrowLeftCircle"><IconArrowLeftCircle size="lg" /></Tooltip>
    <Tooltip text="IconArrowLeftRight" copy="IconArrowLeftRight"><IconArrowLeftRight size="lg" /></Tooltip>
    <Tooltip text="IconArrowRight" copy="IconArrowRight"><IconArrowRight size="lg" /></Tooltip>
    <Tooltip text="IconArrowRightCircle" copy="IconArrowRightCircle"><IconArrowRightCircle size="lg" /></Tooltip>
    <Tooltip text="IconArrowUp" copy="IconArrowUp"><IconArrowUp size="lg" /></Tooltip>
    <Tooltip text="IconArrowUpCircle" copy="IconArrowUpCircle"><IconArrowUpCircle size="lg" /></Tooltip>
    <Tooltip text="IconArrowUpDown" copy="IconArrowUpDown"><IconArrowUpDown size="lg" /></Tooltip>
    <Tooltip text="IconArrowUpLeft" copy="IconArrowUpLeft"><IconArrowUpLeft size="lg" /></Tooltip>
    <Tooltip text="IconArrowUpRight" copy="IconArrowUpRight"><IconArrowUpRight size="lg" /></Tooltip>
    <Tooltip text="IconAsterisk" copy="IconAsterisk"><IconAsterisk size="lg" /></Tooltip>
    <Tooltip text="IconAtSign" copy="IconAtSign"><IconAtSign size="lg" /></Tooltip>
    <Tooltip text="IconAward" copy="IconAward"><IconAward size="lg" /></Tooltip>
    <Tooltip text="IconAxe" copy="IconAxe"><IconAxe size="lg" /></Tooltip>
    <Tooltip text="IconAxis3D" copy="IconAxis3D"><IconAxis3D size="lg" /></Tooltip>
    <Tooltip text="IconBaby" copy="IconBaby"><IconBaby size="lg" /></Tooltip>
    <Tooltip text="IconBackpack" copy="IconBackpack"><IconBackpack size="lg" /></Tooltip>
    <Tooltip text="IconBaggageClaim" copy="IconBaggageClaim"><IconBaggageClaim size="lg" /></Tooltip>
    <Tooltip text="IconBanana" copy="IconBanana"><IconBanana size="lg" /></Tooltip>
    <Tooltip text="IconBanknote" copy="IconBanknote"><IconBanknote size="lg" /></Tooltip>
    <Tooltip text="IconBarChart" copy="IconBarChart"><IconBarChart size="lg" /></Tooltip>
    <Tooltip text="IconBarChart2" copy="IconBarChart2"><IconBarChart2 size="lg" /></Tooltip>
    <Tooltip text="IconBarChart3" copy="IconBarChart3"><IconBarChart3 size="lg" /></Tooltip>
    <Tooltip text="IconBarChart4" copy="IconBarChart4"><IconBarChart4 size="lg" /></Tooltip>
    <Tooltip text="IconBarChartHorizontal" copy="IconBarChartHorizontal"><IconBarChartHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconBaseline" copy="IconBaseline"><IconBaseline size="lg" /></Tooltip>
    <Tooltip text="IconBath" copy="IconBath"><IconBath size="lg" /></Tooltip>
    <Tooltip text="IconBattery" copy="IconBattery"><IconBattery size="lg" /></Tooltip>
    <Tooltip text="IconBatteryCharging" copy="IconBatteryCharging"><IconBatteryCharging size="lg" /></Tooltip>
    <Tooltip text="IconBatteryFull" copy="IconBatteryFull"><IconBatteryFull size="lg" /></Tooltip>
    <Tooltip text="IconBatteryLow" copy="IconBatteryLow"><IconBatteryLow size="lg" /></Tooltip>
    <Tooltip text="IconBatteryMedium" copy="IconBatteryMedium"><IconBatteryMedium size="lg" /></Tooltip>
    <Tooltip text="IconBeaker" copy="IconBeaker"><IconBeaker size="lg" /></Tooltip>
    <Tooltip text="IconBean" copy="IconBean"><IconBean size="lg" /></Tooltip>
    <Tooltip text="IconBeanOff" copy="IconBeanOff"><IconBeanOff size="lg" /></Tooltip>
    <Tooltip text="IconBed" copy="IconBed"><IconBed size="lg" /></Tooltip>
    <Tooltip text="IconBedDouble" copy="IconBedDouble"><IconBedDouble size="lg" /></Tooltip>
    <Tooltip text="IconBedSingle" copy="IconBedSingle"><IconBedSingle size="lg" /></Tooltip>
    <Tooltip text="IconBeer" copy="IconBeer"><IconBeer size="lg" /></Tooltip>
    <Tooltip text="IconBell" copy="IconBell"><IconBell size="lg" /></Tooltip>
    <Tooltip text="IconBellMinus" copy="IconBellMinus"><IconBellMinus size="lg" /></Tooltip>
    <Tooltip text="IconBellOff" copy="IconBellOff"><IconBellOff size="lg" /></Tooltip>
    <Tooltip text="IconBellPlus" copy="IconBellPlus"><IconBellPlus size="lg" /></Tooltip>
    <Tooltip text="IconBellRing" copy="IconBellRing"><IconBellRing size="lg" /></Tooltip>
    <Tooltip text="IconBike" copy="IconBike"><IconBike size="lg" /></Tooltip>
    <Tooltip text="IconBinary" copy="IconBinary"><IconBinary size="lg" /></Tooltip>
    <Tooltip text="IconBitcoin" copy="IconBitcoin"><IconBitcoin size="lg" /></Tooltip>
    <Tooltip text="IconBluetooth" copy="IconBluetooth"><IconBluetooth size="lg" /></Tooltip>
    <Tooltip text="IconBluetoothConnected" copy="IconBluetoothConnected"><IconBluetoothConnected size="lg" /></Tooltip>
    <Tooltip text="IconBluetoothOff" copy="IconBluetoothOff"><IconBluetoothOff size="lg" /></Tooltip>
    <Tooltip text="IconBluetoothSearching" copy="IconBluetoothSearching"><IconBluetoothSearching size="lg" /></Tooltip>
    <Tooltip text="IconBold" copy="IconBold"><IconBold size="lg" /></Tooltip>
    <Tooltip text="IconBomb" copy="IconBomb"><IconBomb size="lg" /></Tooltip>
    <Tooltip text="IconBone" copy="IconBone"><IconBone size="lg" /></Tooltip>
    <Tooltip text="IconBook" copy="IconBook"><IconBook size="lg" /></Tooltip>
    <Tooltip text="IconBookmark" copy="IconBookmark"><IconBookmark size="lg" /></Tooltip>
    <Tooltip text="IconBookmarkMinus" copy="IconBookmarkMinus"><IconBookmarkMinus size="lg" /></Tooltip>
    <Tooltip text="IconBookmarkPlus" copy="IconBookmarkPlus"><IconBookmarkPlus size="lg" /></Tooltip>
    <Tooltip text="IconBookOpen" copy="IconBookOpen"><IconBookOpen size="lg" /></Tooltip>
    <Tooltip text="IconBookOpenCheck" copy="IconBookOpenCheck"><IconBookOpenCheck size="lg" /></Tooltip>
    <Tooltip text="IconBot" copy="IconBot"><IconBot size="lg" /></Tooltip>
    <Tooltip text="IconBox" copy="IconBox"><IconBox size="lg" /></Tooltip>
    <Tooltip text="IconBoxes" copy="IconBoxes"><IconBoxes size="lg" /></Tooltip>
    <Tooltip text="IconBoxSelect" copy="IconBoxSelect"><IconBoxSelect size="lg" /></Tooltip>
    <Tooltip text="IconBriefcase" copy="IconBriefcase"><IconBriefcase size="lg" /></Tooltip>
    <Tooltip text="IconBrush" copy="IconBrush"><IconBrush size="lg" /></Tooltip>
    <Tooltip text="IconBug" copy="IconBug"><IconBug size="lg" /></Tooltip>
    <Tooltip text="IconBuilding" copy="IconBuilding"><IconBuilding size="lg" /></Tooltip>
    <Tooltip text="IconBuilding2" copy="IconBuilding2"><IconBuilding2 size="lg" /></Tooltip>
    <Tooltip text="IconBus" copy="IconBus"><IconBus size="lg" /></Tooltip>
    <Tooltip text="IconCake" copy="IconCake"><IconCake size="lg" /></Tooltip>
    <Tooltip text="IconCalculator" copy="IconCalculator"><IconCalculator size="lg" /></Tooltip>
    <Tooltip text="IconCalendar" copy="IconCalendar"><IconCalendar size="lg" /></Tooltip>
    <Tooltip text="IconCalendarCheck" copy="IconCalendarCheck"><IconCalendarCheck size="lg" /></Tooltip>
    <Tooltip text="IconCalendarCheck2" copy="IconCalendarCheck2"><IconCalendarCheck2 size="lg" /></Tooltip>
    <Tooltip text="IconCalendarClock" copy="IconCalendarClock"><IconCalendarClock size="lg" /></Tooltip>
    <Tooltip text="IconCalendarDays" copy="IconCalendarDays"><IconCalendarDays size="lg" /></Tooltip>
    <Tooltip text="IconCalendarHeart" copy="IconCalendarHeart"><IconCalendarHeart size="lg" /></Tooltip>
    <Tooltip text="IconCalendarMinus" copy="IconCalendarMinus"><IconCalendarMinus size="lg" /></Tooltip>
    <Tooltip text="IconCalendarOff" copy="IconCalendarOff"><IconCalendarOff size="lg" /></Tooltip>
    <Tooltip text="IconCalendarPlus" copy="IconCalendarPlus"><IconCalendarPlus size="lg" /></Tooltip>
    <Tooltip text="IconCalendarRange" copy="IconCalendarRange"><IconCalendarRange size="lg" /></Tooltip>
    <Tooltip text="IconCalendarSearch" copy="IconCalendarSearch"><IconCalendarSearch size="lg" /></Tooltip>
    <Tooltip text="IconCalendarX" copy="IconCalendarX"><IconCalendarX size="lg" /></Tooltip>
    <Tooltip text="IconCalendarX2" copy="IconCalendarX2"><IconCalendarX2 size="lg" /></Tooltip>
    <Tooltip text="IconCamera" copy="IconCamera"><IconCamera size="lg" /></Tooltip>
    <Tooltip text="IconCameraOff" copy="IconCameraOff"><IconCameraOff size="lg" /></Tooltip>
    <Tooltip text="IconCandy" copy="IconCandy"><IconCandy size="lg" /></Tooltip>
    <Tooltip text="IconCandyOff" copy="IconCandyOff"><IconCandyOff size="lg" /></Tooltip>
    <Tooltip text="IconCar" copy="IconCar"><IconCar size="lg" /></Tooltip>
    <Tooltip text="IconCarrot" copy="IconCarrot"><IconCarrot size="lg" /></Tooltip>
    <Tooltip text="IconCast" copy="IconCast"><IconCast size="lg" /></Tooltip>
    <Tooltip text="IconCat" copy="IconCat"><IconCat size="lg" /></Tooltip>
    <Tooltip text="IconCheck" copy="IconCheck"><IconCheck size="lg" /></Tooltip>
    <Tooltip text="IconCheckCheck" copy="IconCheckCheck"><IconCheckCheck size="lg" /></Tooltip>
    <Tooltip text="IconCheckCircle" copy="IconCheckCircle"><IconCheckCircle size="lg" /></Tooltip>
    <Tooltip text="IconCheckCircle2" copy="IconCheckCircle2"><IconCheckCircle2 size="lg" /></Tooltip>
    <Tooltip text="IconCheckSquare" copy="IconCheckSquare"><IconCheckSquare size="lg" /></Tooltip>
    <Tooltip text="IconChefHat" copy="IconChefHat"><IconChefHat size="lg" /></Tooltip>
    <Tooltip text="IconCherry" copy="IconCherry"><IconCherry size="lg" /></Tooltip>
    <Tooltip text="IconChevronDown" copy="IconChevronDown"><IconChevronDown size="lg" /></Tooltip>
    <Tooltip text="IconChevronFirst" copy="IconChevronFirst"><IconChevronFirst size="lg" /></Tooltip>
    <Tooltip text="IconChevronLast" copy="IconChevronLast"><IconChevronLast size="lg" /></Tooltip>
    <Tooltip text="IconChevronLeft" copy="IconChevronLeft"><IconChevronLeft size="lg" /></Tooltip>
    <Tooltip text="IconChevronRight" copy="IconChevronRight"><IconChevronRight size="lg" /></Tooltip>
    <Tooltip text="IconChevronsDown" copy="IconChevronsDown"><IconChevronsDown size="lg" /></Tooltip>
    <Tooltip text="IconChevronsDownUp" copy="IconChevronsDownUp"><IconChevronsDownUp size="lg" /></Tooltip>
    <Tooltip text="IconChevronsLeft" copy="IconChevronsLeft"><IconChevronsLeft size="lg" /></Tooltip>
    <Tooltip text="IconChevronsLeftRight" copy="IconChevronsLeftRight"><IconChevronsLeftRight size="lg" /></Tooltip>
    <Tooltip text="IconChevronsRight" copy="IconChevronsRight"><IconChevronsRight size="lg" /></Tooltip>
    <Tooltip text="IconChevronsRightLeft" copy="IconChevronsRightLeft"><IconChevronsRightLeft size="lg" /></Tooltip>
    <Tooltip text="IconChevronsUp" copy="IconChevronsUp"><IconChevronsUp size="lg" /></Tooltip>
    <Tooltip text="IconChevronsUpDown" copy="IconChevronsUpDown"><IconChevronsUpDown size="lg" /></Tooltip>
    <Tooltip text="IconChevronUp" copy="IconChevronUp"><IconChevronUp size="lg" /></Tooltip>
    <Tooltip text="IconChrome" copy="IconChrome"><IconChrome size="lg" /></Tooltip>
    <Tooltip text="IconCigarette" copy="IconCigarette"><IconCigarette size="lg" /></Tooltip>
    <Tooltip text="IconCigaretteOff" copy="IconCigaretteOff"><IconCigaretteOff size="lg" /></Tooltip>
    <Tooltip text="IconCircle" copy="IconCircle"><IconCircle size="lg" /></Tooltip>
    <Tooltip text="IconCircleDot" copy="IconCircleDot"><IconCircleDot size="lg" /></Tooltip>
    <Tooltip text="IconCircleEllipsis" copy="IconCircleEllipsis"><IconCircleEllipsis size="lg" /></Tooltip>
    <Tooltip text="IconCircleSlashed" copy="IconCircleSlashed"><IconCircleSlashed size="lg" /></Tooltip>
    <Tooltip text="IconCitrus" copy="IconCitrus"><IconCitrus size="lg" /></Tooltip>
    <Tooltip text="IconClapperboard" copy="IconClapperboard"><IconClapperboard size="lg" /></Tooltip>
    <Tooltip text="IconClipboard" copy="IconClipboard"><IconClipboard size="lg" /></Tooltip>
    <Tooltip text="IconClipboardCheck" copy="IconClipboardCheck"><IconClipboardCheck size="lg" /></Tooltip>
    <Tooltip text="IconClipboardCopy" copy="IconClipboardCopy"><IconClipboardCopy size="lg" /></Tooltip>
    <Tooltip text="IconClipboardEdit" copy="IconClipboardEdit"><IconClipboardEdit size="lg" /></Tooltip>
    <Tooltip text="IconClipboardList" copy="IconClipboardList"><IconClipboardList size="lg" /></Tooltip>
    <Tooltip text="IconClipboardSignature" copy="IconClipboardSignature"><IconClipboardSignature size="lg" /></Tooltip>
    <Tooltip text="IconClipboardType" copy="IconClipboardType"><IconClipboardType size="lg" /></Tooltip>
    <Tooltip text="IconClipboardX" copy="IconClipboardX"><IconClipboardX size="lg" /></Tooltip>
    <Tooltip text="IconClock" copy="IconClock"><IconClock size="lg" /></Tooltip>
    <Tooltip text="IconClock1" copy="IconClock1"><IconClock1 size="lg" /></Tooltip>
    <Tooltip text="IconClock2" copy="IconClock2"><IconClock2 size="lg" /></Tooltip>
    <Tooltip text="IconClock3" copy="IconClock3"><IconClock3 size="lg" /></Tooltip>
    <Tooltip text="IconClock4" copy="IconClock4"><IconClock4 size="lg" /></Tooltip>
    <Tooltip text="IconClock5" copy="IconClock5"><IconClock5 size="lg" /></Tooltip>
    <Tooltip text="IconClock6" copy="IconClock6"><IconClock6 size="lg" /></Tooltip>
    <Tooltip text="IconClock7" copy="IconClock7"><IconClock7 size="lg" /></Tooltip>
    <Tooltip text="IconClock8" copy="IconClock8"><IconClock8 size="lg" /></Tooltip>
    <Tooltip text="IconClock9" copy="IconClock9"><IconClock9 size="lg" /></Tooltip>
    <Tooltip text="IconClock10" copy="IconClock10"><IconClock10 size="lg" /></Tooltip>
    <Tooltip text="IconClock11" copy="IconClock11"><IconClock11 size="lg" /></Tooltip>
    <Tooltip text="IconClock12" copy="IconClock12"><IconClock12 size="lg" /></Tooltip>
    <Tooltip text="IconCloud" copy="IconCloud"><IconCloud size="lg" /></Tooltip>
    <Tooltip text="IconCloudCog" copy="IconCloudCog"><IconCloudCog size="lg" /></Tooltip>
    <Tooltip text="IconCloudDrizzle" copy="IconCloudDrizzle"><IconCloudDrizzle size="lg" /></Tooltip>
    <Tooltip text="IconCloudFog" copy="IconCloudFog"><IconCloudFog size="lg" /></Tooltip>
    <Tooltip text="IconCloudHail" copy="IconCloudHail"><IconCloudHail size="lg" /></Tooltip>
    <Tooltip text="IconCloudLightning" copy="IconCloudLightning"><IconCloudLightning size="lg" /></Tooltip>
    <Tooltip text="IconCloudMoon" copy="IconCloudMoon"><IconCloudMoon size="lg" /></Tooltip>
    <Tooltip text="IconCloudMoonRain" copy="IconCloudMoonRain"><IconCloudMoonRain size="lg" /></Tooltip>
    <Tooltip text="IconCloudOff" copy="IconCloudOff"><IconCloudOff size="lg" /></Tooltip>
    <Tooltip text="IconCloudRain" copy="IconCloudRain"><IconCloudRain size="lg" /></Tooltip>
    <Tooltip text="IconCloudRainWind" copy="IconCloudRainWind"><IconCloudRainWind size="lg" /></Tooltip>
    <Tooltip text="IconCloudSnow" copy="IconCloudSnow"><IconCloudSnow size="lg" /></Tooltip>
    <Tooltip text="IconCloudSun" copy="IconCloudSun"><IconCloudSun size="lg" /></Tooltip>
    <Tooltip text="IconCloudSunRain" copy="IconCloudSunRain"><IconCloudSunRain size="lg" /></Tooltip>
    <Tooltip text="IconCloudy" copy="IconCloudy"><IconCloudy size="lg" /></Tooltip>
    <Tooltip text="IconClover" copy="IconClover"><IconClover size="lg" /></Tooltip>
    <Tooltip text="IconCode" copy="IconCode"><IconCode size="lg" /></Tooltip>
    <Tooltip text="IconCode2" copy="IconCode2"><IconCode2 size="lg" /></Tooltip>
    <Tooltip text="IconCodepen" copy="IconCodepen"><IconCodepen size="lg" /></Tooltip>
    <Tooltip text="IconCodesandbox" copy="IconCodesandbox"><IconCodesandbox size="lg" /></Tooltip>
    <Tooltip text="IconCoffee" copy="IconCoffee"><IconCoffee size="lg" /></Tooltip>
    <Tooltip text="IconCog" copy="IconCog"><IconCog size="lg" /></Tooltip>
    <Tooltip text="IconCoins" copy="IconCoins"><IconCoins size="lg" /></Tooltip>
    <Tooltip text="IconColumns" copy="IconColumns"><IconColumns size="lg" /></Tooltip>
    <Tooltip text="IconCommand" copy="IconCommand"><IconCommand size="lg" /></Tooltip>
    <Tooltip text="IconCompass" copy="IconCompass"><IconCompass size="lg" /></Tooltip>
    <Tooltip text="IconComponent" copy="IconComponent"><IconComponent size="lg" /></Tooltip>
    <Tooltip text="IconConciergeBell" copy="IconConciergeBell"><IconConciergeBell size="lg" /></Tooltip>
    <Tooltip text="IconContact" copy="IconContact"><IconContact size="lg" /></Tooltip>
    <Tooltip text="IconContrast" copy="IconContrast"><IconContrast size="lg" /></Tooltip>
    <Tooltip text="IconCookie" copy="IconCookie"><IconCookie size="lg" /></Tooltip>
    <Tooltip text="IconCopy" copy="IconCopy"><IconCopy size="lg" /></Tooltip>
    <Tooltip text="IconCopyleft" copy="IconCopyleft"><IconCopyleft size="lg" /></Tooltip>
    <Tooltip text="IconCopyright" copy="IconCopyright"><IconCopyright size="lg" /></Tooltip>
    <Tooltip text="IconCornerDownLeft" copy="IconCornerDownLeft"><IconCornerDownLeft size="lg" /></Tooltip>
    <Tooltip text="IconCornerDownRight" copy="IconCornerDownRight"><IconCornerDownRight size="lg" /></Tooltip>
    <Tooltip text="IconCornerLeftDown" copy="IconCornerLeftDown"><IconCornerLeftDown size="lg" /></Tooltip>
    <Tooltip text="IconCornerLeftUp" copy="IconCornerLeftUp"><IconCornerLeftUp size="lg" /></Tooltip>
    <Tooltip text="IconCornerRightDown" copy="IconCornerRightDown"><IconCornerRightDown size="lg" /></Tooltip>
    <Tooltip text="IconCornerRightUp" copy="IconCornerRightUp"><IconCornerRightUp size="lg" /></Tooltip>
    <Tooltip text="IconCornerUpLeft" copy="IconCornerUpLeft"><IconCornerUpLeft size="lg" /></Tooltip>
    <Tooltip text="IconCornerUpRight" copy="IconCornerUpRight"><IconCornerUpRight size="lg" /></Tooltip>
    <Tooltip text="IconCpu" copy="IconCpu"><IconCpu size="lg" /></Tooltip>
    <Tooltip text="IconCreditCard" copy="IconCreditCard"><IconCreditCard size="lg" /></Tooltip>
    <Tooltip text="IconCroissant" copy="IconCroissant"><IconCroissant size="lg" /></Tooltip>
    <Tooltip text="IconCrop" copy="IconCrop"><IconCrop size="lg" /></Tooltip>
    <Tooltip text="IconCross" copy="IconCross"><IconCross size="lg" /></Tooltip>
    <Tooltip text="IconCrosshair" copy="IconCrosshair"><IconCrosshair size="lg" /></Tooltip>
    <Tooltip text="IconCrown" copy="IconCrown"><IconCrown size="lg" /></Tooltip>
    <Tooltip text="IconCupSoda" copy="IconCupSoda"><IconCupSoda size="lg" /></Tooltip>
    <Tooltip text="IconCurlyBraces" copy="IconCurlyBraces"><IconCurlyBraces size="lg" /></Tooltip>
    <Tooltip text="IconCurrency" copy="IconCurrency"><IconCurrency size="lg" /></Tooltip>
    <Tooltip text="IconDatabase" copy="IconDatabase"><IconDatabase size="lg" /></Tooltip>
    <Tooltip text="IconDelete" copy="IconDelete"><IconDelete size="lg" /></Tooltip>
    <Tooltip text="IconDiamond" copy="IconDiamond"><IconDiamond size="lg" /></Tooltip>
    <Tooltip text="IconDice1" copy="IconDice1"><IconDice1 size="lg" /></Tooltip>
    <Tooltip text="IconDice2" copy="IconDice2"><IconDice2 size="lg" /></Tooltip>
    <Tooltip text="IconDice3" copy="IconDice3"><IconDice3 size="lg" /></Tooltip>
    <Tooltip text="IconDice4" copy="IconDice4"><IconDice4 size="lg" /></Tooltip>
    <Tooltip text="IconDice5" copy="IconDice5"><IconDice5 size="lg" /></Tooltip>
    <Tooltip text="IconDice6" copy="IconDice6"><IconDice6 size="lg" /></Tooltip>
    <Tooltip text="IconDices" copy="IconDices"><IconDices size="lg" /></Tooltip>
    <Tooltip text="IconDiff" copy="IconDiff"><IconDiff size="lg" /></Tooltip>
    <Tooltip text="IconDisc" copy="IconDisc"><IconDisc size="lg" /></Tooltip>
    <Tooltip text="IconDivide" copy="IconDivide"><IconDivide size="lg" /></Tooltip>
    <Tooltip text="IconDivideCircle" copy="IconDivideCircle"><IconDivideCircle size="lg" /></Tooltip>
    <Tooltip text="IconDivideSquare" copy="IconDivideSquare"><IconDivideSquare size="lg" /></Tooltip>
    <Tooltip text="IconDna" copy="IconDna"><IconDna size="lg" /></Tooltip>
    <Tooltip text="IconDnaOff" copy="IconDnaOff"><IconDnaOff size="lg" /></Tooltip>
    <Tooltip text="IconDog" copy="IconDog"><IconDog size="lg" /></Tooltip>
    <Tooltip text="IconDollarSign" copy="IconDollarSign"><IconDollarSign size="lg" /></Tooltip>
    <Tooltip text="IconDownload" copy="IconDownload"><IconDownload size="lg" /></Tooltip>
    <Tooltip text="IconDownloadCloud" copy="IconDownloadCloud"><IconDownloadCloud size="lg" /></Tooltip>
    <Tooltip text="IconDribbble" copy="IconDribbble"><IconDribbble size="lg" /></Tooltip>
    <Tooltip text="IconDroplet" copy="IconDroplet"><IconDroplet size="lg" /></Tooltip>
    <Tooltip text="IconDroplets" copy="IconDroplets"><IconDroplets size="lg" /></Tooltip>
    <Tooltip text="IconDrumstick" copy="IconDrumstick"><IconDrumstick size="lg" /></Tooltip>
    <Tooltip text="IconDumbbell" copy="IconDumbbell"><IconDumbbell size="lg" /></Tooltip>
    <Tooltip text="IconEar" copy="IconEar"><IconEar size="lg" /></Tooltip>
    <Tooltip text="IconEarOff" copy="IconEarOff"><IconEarOff size="lg" /></Tooltip>
    <Tooltip text="IconEdit" copy="IconEdit"><IconEdit size="lg" /></Tooltip>
    <Tooltip text="IconEdit2" copy="IconEdit2"><IconEdit2 size="lg" /></Tooltip>
    <Tooltip text="IconEdit3" copy="IconEdit3"><IconEdit3 size="lg" /></Tooltip>
    <Tooltip text="IconEgg" copy="IconEgg"><IconEgg size="lg" /></Tooltip>
    <Tooltip text="IconEggFried" copy="IconEggFried"><IconEggFried size="lg" /></Tooltip>
    <Tooltip text="IconEggOff" copy="IconEggOff"><IconEggOff size="lg" /></Tooltip>
    <Tooltip text="IconEqual" copy="IconEqual"><IconEqual size="lg" /></Tooltip>
    <Tooltip text="IconEqualNot" copy="IconEqualNot"><IconEqualNot size="lg" /></Tooltip>
    <Tooltip text="IconEraser" copy="IconEraser"><IconEraser size="lg" /></Tooltip>
    <Tooltip text="IconEuro" copy="IconEuro"><IconEuro size="lg" /></Tooltip>
    <Tooltip text="IconExpand" copy="IconExpand"><IconExpand size="lg" /></Tooltip>
    <Tooltip text="IconExternalLink" copy="IconExternalLink"><IconExternalLink size="lg" /></Tooltip>
    <Tooltip text="IconEye" copy="IconEye"><IconEye size="lg" /></Tooltip>
    <Tooltip text="IconEyeOff" copy="IconEyeOff"><IconEyeOff size="lg" /></Tooltip>
    <Tooltip text="IconFacebook" copy="IconFacebook"><IconFacebook size="lg" /></Tooltip>
    <Tooltip text="IconFactory" copy="IconFactory"><IconFactory size="lg" /></Tooltip>
    <Tooltip text="IconFan" copy="IconFan"><IconFan size="lg" /></Tooltip>
    <Tooltip text="IconFastForward" copy="IconFastForward"><IconFastForward size="lg" /></Tooltip>
    <Tooltip text="IconFeather" copy="IconFeather"><IconFeather size="lg" /></Tooltip>
    <Tooltip text="IconFigma" copy="IconFigma"><IconFigma size="lg" /></Tooltip>
    <Tooltip text="IconFile" copy="IconFile"><IconFile size="lg" /></Tooltip>
    <Tooltip text="IconFileArchive" copy="IconFileArchive"><IconFileArchive size="lg" /></Tooltip>
    <Tooltip text="IconFileAudio" copy="IconFileAudio"><IconFileAudio size="lg" /></Tooltip>
    <Tooltip text="IconFileAudio2" copy="IconFileAudio2"><IconFileAudio2 size="lg" /></Tooltip>
    <Tooltip text="IconFileAxis3D" copy="IconFileAxis3D"><IconFileAxis3D size="lg" /></Tooltip>
    <Tooltip text="IconFileBadge" copy="IconFileBadge"><IconFileBadge size="lg" /></Tooltip>
    <Tooltip text="IconFileBadge2" copy="IconFileBadge2"><IconFileBadge2 size="lg" /></Tooltip>
    <Tooltip text="IconFileBarChart" copy="IconFileBarChart"><IconFileBarChart size="lg" /></Tooltip>
    <Tooltip text="IconFileBarChart2" copy="IconFileBarChart2"><IconFileBarChart2 size="lg" /></Tooltip>
    <Tooltip text="IconFileBox" copy="IconFileBox"><IconFileBox size="lg" /></Tooltip>
    <Tooltip text="IconFileCheck" copy="IconFileCheck"><IconFileCheck size="lg" /></Tooltip>
    <Tooltip text="IconFileCheck2" copy="IconFileCheck2"><IconFileCheck2 size="lg" /></Tooltip>
    <Tooltip text="IconFileClock" copy="IconFileClock"><IconFileClock size="lg" /></Tooltip>
    <Tooltip text="IconFileCode" copy="IconFileCode"><IconFileCode size="lg" /></Tooltip>
    <Tooltip text="IconFileCog" copy="IconFileCog"><IconFileCog size="lg" /></Tooltip>
    <Tooltip text="IconFileCog2" copy="IconFileCog2"><IconFileCog2 size="lg" /></Tooltip>
    <Tooltip text="IconFileDiff" copy="IconFileDiff"><IconFileDiff size="lg" /></Tooltip>
    <Tooltip text="IconFileDigit" copy="IconFileDigit"><IconFileDigit size="lg" /></Tooltip>
    <Tooltip text="IconFileDown" copy="IconFileDown"><IconFileDown size="lg" /></Tooltip>
    <Tooltip text="IconFileEdit" copy="IconFileEdit"><IconFileEdit size="lg" /></Tooltip>
    <Tooltip text="IconFileHeart" copy="IconFileHeart"><IconFileHeart size="lg" /></Tooltip>
    <Tooltip text="IconFileImage" copy="IconFileImage"><IconFileImage size="lg" /></Tooltip>
    <Tooltip text="IconFileInput" copy="IconFileInput"><IconFileInput size="lg" /></Tooltip>
    <Tooltip text="IconFileJson" copy="IconFileJson"><IconFileJson size="lg" /></Tooltip>
    <Tooltip text="IconFileJson2" copy="IconFileJson2"><IconFileJson2 size="lg" /></Tooltip>
    <Tooltip text="IconFileKey" copy="IconFileKey"><IconFileKey size="lg" /></Tooltip>
    <Tooltip text="IconFileKey2" copy="IconFileKey2"><IconFileKey2 size="lg" /></Tooltip>
    <Tooltip text="IconFileLineChart" copy="IconFileLineChart"><IconFileLineChart size="lg" /></Tooltip>
    <Tooltip text="IconFileLock" copy="IconFileLock"><IconFileLock size="lg" /></Tooltip>
    <Tooltip text="IconFileLock2" copy="IconFileLock2"><IconFileLock2 size="lg" /></Tooltip>
    <Tooltip text="IconFileMinus" copy="IconFileMinus"><IconFileMinus size="lg" /></Tooltip>
    <Tooltip text="IconFileMinus2" copy="IconFileMinus2"><IconFileMinus2 size="lg" /></Tooltip>
    <Tooltip text="IconFileOutput" copy="IconFileOutput"><IconFileOutput size="lg" /></Tooltip>
    <Tooltip text="IconFilePieChart" copy="IconFilePieChart"><IconFilePieChart size="lg" /></Tooltip>
    <Tooltip text="IconFilePlus" copy="IconFilePlus"><IconFilePlus size="lg" /></Tooltip>
    <Tooltip text="IconFilePlus2" copy="IconFilePlus2"><IconFilePlus2 size="lg" /></Tooltip>
    <Tooltip text="IconFileQuestion" copy="IconFileQuestion"><IconFileQuestion size="lg" /></Tooltip>
    <Tooltip text="IconFiles" copy="IconFiles"><IconFiles size="lg" /></Tooltip>
    <Tooltip text="IconFileScan" copy="IconFileScan"><IconFileScan size="lg" /></Tooltip>
    <Tooltip text="IconFileSearch" copy="IconFileSearch"><IconFileSearch size="lg" /></Tooltip>
    <Tooltip text="IconFileSearch2" copy="IconFileSearch2"><IconFileSearch2 size="lg" /></Tooltip>
    <Tooltip text="IconFileSignature" copy="IconFileSignature"><IconFileSignature size="lg" /></Tooltip>
    <Tooltip text="IconFileSpreadsheet" copy="IconFileSpreadsheet"><IconFileSpreadsheet size="lg" /></Tooltip>
    <Tooltip text="IconFileSymlink" copy="IconFileSymlink"><IconFileSymlink size="lg" /></Tooltip>
    <Tooltip text="IconFileTerminal" copy="IconFileTerminal"><IconFileTerminal size="lg" /></Tooltip>
    <Tooltip text="IconFileText" copy="IconFileText"><IconFileText size="lg" /></Tooltip>
    <Tooltip text="IconFileType" copy="IconFileType"><IconFileType size="lg" /></Tooltip>
    <Tooltip text="IconFileType2" copy="IconFileType2"><IconFileType2 size="lg" /></Tooltip>
    <Tooltip text="IconFileUp" copy="IconFileUp"><IconFileUp size="lg" /></Tooltip>
    <Tooltip text="IconFileVideo" copy="IconFileVideo"><IconFileVideo size="lg" /></Tooltip>
    <Tooltip text="IconFileVideo2" copy="IconFileVideo2"><IconFileVideo2 size="lg" /></Tooltip>
    <Tooltip text="IconFileVolume" copy="IconFileVolume"><IconFileVolume size="lg" /></Tooltip>
    <Tooltip text="IconFileVolume2" copy="IconFileVolume2"><IconFileVolume2 size="lg" /></Tooltip>
    <Tooltip text="IconFileWarning" copy="IconFileWarning"><IconFileWarning size="lg" /></Tooltip>
    <Tooltip text="IconFileX" copy="IconFileX"><IconFileX size="lg" /></Tooltip>
    <Tooltip text="IconFileX2" copy="IconFileX2"><IconFileX2 size="lg" /></Tooltip>
    <Tooltip text="IconFilm" copy="IconFilm"><IconFilm size="lg" /></Tooltip>
    <Tooltip text="IconFilter" copy="IconFilter"><IconFilter size="lg" /></Tooltip>
    <Tooltip text="IconFingerprint" copy="IconFingerprint"><IconFingerprint size="lg" /></Tooltip>
    <Tooltip text="IconFlag" copy="IconFlag"><IconFlag size="lg" /></Tooltip>
    <Tooltip text="IconFlagOff" copy="IconFlagOff"><IconFlagOff size="lg" /></Tooltip>
    <Tooltip text="IconFlagTriangleLeft" copy="IconFlagTriangleLeft"><IconFlagTriangleLeft size="lg" /></Tooltip>
    <Tooltip text="IconFlagTriangleRight" copy="IconFlagTriangleRight"><IconFlagTriangleRight size="lg" /></Tooltip>
    <Tooltip text="IconFlame" copy="IconFlame"><IconFlame size="lg" /></Tooltip>
    <Tooltip text="IconFlashlight" copy="IconFlashlight"><IconFlashlight size="lg" /></Tooltip>
    <Tooltip text="IconFlashlightOff" copy="IconFlashlightOff"><IconFlashlightOff size="lg" /></Tooltip>
    <Tooltip text="IconFlaskConical" copy="IconFlaskConical"><IconFlaskConical size="lg" /></Tooltip>
    <Tooltip text="IconFlaskConicalOff" copy="IconFlaskConicalOff"><IconFlaskConicalOff size="lg" /></Tooltip>
    <Tooltip text="IconFlaskRound" copy="IconFlaskRound"><IconFlaskRound size="lg" /></Tooltip>
    <Tooltip text="IconFlipHorizontal" copy="IconFlipHorizontal"><IconFlipHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconFlipHorizontal2" copy="IconFlipHorizontal2"><IconFlipHorizontal2 size="lg" /></Tooltip>
    <Tooltip text="IconFlipVertical" copy="IconFlipVertical"><IconFlipVertical size="lg" /></Tooltip>
    <Tooltip text="IconFlipVertical2" copy="IconFlipVertical2"><IconFlipVertical2 size="lg" /></Tooltip>
    <Tooltip text="IconFlower" copy="IconFlower"><IconFlower size="lg" /></Tooltip>
    <Tooltip text="IconFlower2" copy="IconFlower2"><IconFlower2 size="lg" /></Tooltip>
    <Tooltip text="IconFocus" copy="IconFocus"><IconFocus size="lg" /></Tooltip>
    <Tooltip text="IconFolder" copy="IconFolder"><IconFolder size="lg" /></Tooltip>
    <Tooltip text="IconFolderArchive" copy="IconFolderArchive"><IconFolderArchive size="lg" /></Tooltip>
    <Tooltip text="IconFolderCheck" copy="IconFolderCheck"><IconFolderCheck size="lg" /></Tooltip>
    <Tooltip text="IconFolderClock" copy="IconFolderClock"><IconFolderClock size="lg" /></Tooltip>
    <Tooltip text="IconFolderClosed" copy="IconFolderClosed"><IconFolderClosed size="lg" /></Tooltip>
    <Tooltip text="IconFolderCog" copy="IconFolderCog"><IconFolderCog size="lg" /></Tooltip>
    <Tooltip text="IconFolderCog2" copy="IconFolderCog2"><IconFolderCog2 size="lg" /></Tooltip>
    <Tooltip text="IconFolderDown" copy="IconFolderDown"><IconFolderDown size="lg" /></Tooltip>
    <Tooltip text="IconFolderEdit" copy="IconFolderEdit"><IconFolderEdit size="lg" /></Tooltip>
    <Tooltip text="IconFolderHeart" copy="IconFolderHeart"><IconFolderHeart size="lg" /></Tooltip>
    <Tooltip text="IconFolderInput" copy="IconFolderInput"><IconFolderInput size="lg" /></Tooltip>
    <Tooltip text="IconFolderKey" copy="IconFolderKey"><IconFolderKey size="lg" /></Tooltip>
    <Tooltip text="IconFolderLock" copy="IconFolderLock"><IconFolderLock size="lg" /></Tooltip>
    <Tooltip text="IconFolderMinus" copy="IconFolderMinus"><IconFolderMinus size="lg" /></Tooltip>
    <Tooltip text="IconFolderOpen" copy="IconFolderOpen"><IconFolderOpen size="lg" /></Tooltip>
    <Tooltip text="IconFolderOutput" copy="IconFolderOutput"><IconFolderOutput size="lg" /></Tooltip>
    <Tooltip text="IconFolderPlus" copy="IconFolderPlus"><IconFolderPlus size="lg" /></Tooltip>
    <Tooltip text="IconFolders" copy="IconFolders"><IconFolders size="lg" /></Tooltip>
    <Tooltip text="IconFolderSearch" copy="IconFolderSearch"><IconFolderSearch size="lg" /></Tooltip>
    <Tooltip text="IconFolderSearch2" copy="IconFolderSearch2"><IconFolderSearch2 size="lg" /></Tooltip>
    <Tooltip text="IconFolderSymlink" copy="IconFolderSymlink"><IconFolderSymlink size="lg" /></Tooltip>
    <Tooltip text="IconFolderTree" copy="IconFolderTree"><IconFolderTree size="lg" /></Tooltip>
    <Tooltip text="IconFolderUp" copy="IconFolderUp"><IconFolderUp size="lg" /></Tooltip>
    <Tooltip text="IconFolderX" copy="IconFolderX"><IconFolderX size="lg" /></Tooltip>
    <Tooltip text="IconFormInput" copy="IconFormInput"><IconFormInput size="lg" /></Tooltip>
    <Tooltip text="IconForward" copy="IconForward"><IconForward size="lg" /></Tooltip>
    <Tooltip text="IconFrame" copy="IconFrame"><IconFrame size="lg" /></Tooltip>
    <Tooltip text="IconFramer" copy="IconFramer"><IconFramer size="lg" /></Tooltip>
    <Tooltip text="IconFrown" copy="IconFrown"><IconFrown size="lg" /></Tooltip>
    <Tooltip text="IconFuel" copy="IconFuel"><IconFuel size="lg" /></Tooltip>
    <Tooltip text="IconFunctionSquare" copy="IconFunctionSquare"><IconFunctionSquare size="lg" /></Tooltip>
    <Tooltip text="IconGamepad" copy="IconGamepad"><IconGamepad size="lg" /></Tooltip>
    <Tooltip text="IconGamepad2" copy="IconGamepad2"><IconGamepad2 size="lg" /></Tooltip>
    <Tooltip text="IconGauge" copy="IconGauge"><IconGauge size="lg" /></Tooltip>
    <Tooltip text="IconGavel" copy="IconGavel"><IconGavel size="lg" /></Tooltip>
    <Tooltip text="IconGem" copy="IconGem"><IconGem size="lg" /></Tooltip>
    <Tooltip text="IconGhost" copy="IconGhost"><IconGhost size="lg" /></Tooltip>
    <Tooltip text="IconGift" copy="IconGift"><IconGift size="lg" /></Tooltip>
    <Tooltip text="IconGitBranch" copy="IconGitBranch"><IconGitBranch size="lg" /></Tooltip>
    <Tooltip text="IconGitBranchPlus" copy="IconGitBranchPlus"><IconGitBranchPlus size="lg" /></Tooltip>
    <Tooltip text="IconGitCommit" copy="IconGitCommit"><IconGitCommit size="lg" /></Tooltip>
    <Tooltip text="IconGitCompare" copy="IconGitCompare"><IconGitCompare size="lg" /></Tooltip>
    <Tooltip text="IconGitFork" copy="IconGitFork"><IconGitFork size="lg" /></Tooltip>
    <Tooltip text="IconGithub" copy="IconGithub"><IconGithub size="lg" /></Tooltip>
    <Tooltip text="IconGitlab" copy="IconGitlab"><IconGitlab size="lg" /></Tooltip>
    <Tooltip text="IconGitMerge" copy="IconGitMerge"><IconGitMerge size="lg" /></Tooltip>
    <Tooltip text="IconGitPullRequest" copy="IconGitPullRequest"><IconGitPullRequest size="lg" /></Tooltip>
    <Tooltip text="IconGitPullRequestClosed" copy="IconGitPullRequestClosed"><IconGitPullRequestClosed size="lg" /></Tooltip>
    <Tooltip text="IconGitPullRequestDraft" copy="IconGitPullRequestDraft"><IconGitPullRequestDraft size="lg" /></Tooltip>
    <Tooltip text="IconGlasses" copy="IconGlasses"><IconGlasses size="lg" /></Tooltip>
    <Tooltip text="IconGlassWater" copy="IconGlassWater"><IconGlassWater size="lg" /></Tooltip>
    <Tooltip text="IconGlobe" copy="IconGlobe"><IconGlobe size="lg" /></Tooltip>
    <Tooltip text="IconGlobe2" copy="IconGlobe2"><IconGlobe2 size="lg" /></Tooltip>
    <Tooltip text="IconGrab" copy="IconGrab"><IconGrab size="lg" /></Tooltip>
    <Tooltip text="IconGraduationCap" copy="IconGraduationCap"><IconGraduationCap size="lg" /></Tooltip>
    <Tooltip text="IconGrape" copy="IconGrape"><IconGrape size="lg" /></Tooltip>
    <Tooltip text="IconGrid" copy="IconGrid"><IconGrid size="lg" /></Tooltip>
    <Tooltip text="IconGripHorizontal" copy="IconGripHorizontal"><IconGripHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconGripVertical" copy="IconGripVertical"><IconGripVertical size="lg" /></Tooltip>
    <Tooltip text="IconHammer" copy="IconHammer"><IconHammer size="lg" /></Tooltip>
    <Tooltip text="IconHand" copy="IconHand"><IconHand size="lg" /></Tooltip>
    <Tooltip text="IconHandMetal" copy="IconHandMetal"><IconHandMetal size="lg" /></Tooltip>
    <Tooltip text="IconHardDrive" copy="IconHardDrive"><IconHardDrive size="lg" /></Tooltip>
    <Tooltip text="IconHardHat" copy="IconHardHat"><IconHardHat size="lg" /></Tooltip>
    <Tooltip text="IconHash" copy="IconHash"><IconHash size="lg" /></Tooltip>
    <Tooltip text="IconHaze" copy="IconHaze"><IconHaze size="lg" /></Tooltip>
    <Tooltip text="IconHeading" copy="IconHeading"><IconHeading size="lg" /></Tooltip>
    <Tooltip text="IconHeading1" copy="IconHeading1"><IconHeading1 size="lg" /></Tooltip>
    <Tooltip text="IconHeading2" copy="IconHeading2"><IconHeading2 size="lg" /></Tooltip>
    <Tooltip text="IconHeading3" copy="IconHeading3"><IconHeading3 size="lg" /></Tooltip>
    <Tooltip text="IconHeading4" copy="IconHeading4"><IconHeading4 size="lg" /></Tooltip>
    <Tooltip text="IconHeading5" copy="IconHeading5"><IconHeading5 size="lg" /></Tooltip>
    <Tooltip text="IconHeading6" copy="IconHeading6"><IconHeading6 size="lg" /></Tooltip>
    <Tooltip text="IconHeadphones" copy="IconHeadphones"><IconHeadphones size="lg" /></Tooltip>
    <Tooltip text="IconHeart" copy="IconHeart"><IconHeart size="lg" /></Tooltip>
    <Tooltip text="IconHeartCrack" copy="IconHeartCrack"><IconHeartCrack size="lg" /></Tooltip>
    <Tooltip text="IconHeartHandshake" copy="IconHeartHandshake"><IconHeartHandshake size="lg" /></Tooltip>
    <Tooltip text="IconHeartOff" copy="IconHeartOff"><IconHeartOff size="lg" /></Tooltip>
    <Tooltip text="IconHeartPulse" copy="IconHeartPulse"><IconHeartPulse size="lg" /></Tooltip>
    <Tooltip text="IconHelpCircle" copy="IconHelpCircle"><IconHelpCircle size="lg" /></Tooltip>
    <Tooltip text="IconHexagon" copy="IconHexagon"><IconHexagon size="lg" /></Tooltip>
    <Tooltip text="IconHighlighter" copy="IconHighlighter"><IconHighlighter size="lg" /></Tooltip>
    <Tooltip text="IconHistory" copy="IconHistory"><IconHistory size="lg" /></Tooltip>
    <Tooltip text="IconHome" copy="IconHome"><IconHome size="lg" /></Tooltip>
    <Tooltip text="IconHop" copy="IconHop"><IconHop size="lg" /></Tooltip>
    <Tooltip text="IconHopOff" copy="IconHopOff"><IconHopOff size="lg" /></Tooltip>
    <Tooltip text="IconHourglass" copy="IconHourglass"><IconHourglass size="lg" /></Tooltip>
    <Tooltip text="IconIceCream" copy="IconIceCream"><IconIceCream size="lg" /></Tooltip>
    <Tooltip text="IconImage" copy="IconImage"><IconImage size="lg" /></Tooltip>
    <Tooltip text="IconImageMinus" copy="IconImageMinus"><IconImageMinus size="lg" /></Tooltip>
    <Tooltip text="IconImageOff" copy="IconImageOff"><IconImageOff size="lg" /></Tooltip>
    <Tooltip text="IconImagePlus" copy="IconImagePlus"><IconImagePlus size="lg" /></Tooltip>
    <Tooltip text="IconImport" copy="IconImport"><IconImport size="lg" /></Tooltip>
    <Tooltip text="IconInbox" copy="IconInbox"><IconInbox size="lg" /></Tooltip>
    <Tooltip text="IconIndent" copy="IconIndent"><IconIndent size="lg" /></Tooltip>
    <Tooltip text="IconIndianRupee" copy="IconIndianRupee"><IconIndianRupee size="lg" /></Tooltip>
    <Tooltip text="IconInfinity" copy="IconInfinity"><IconInfinity size="lg" /></Tooltip>
    <Tooltip text="IconInfo" copy="IconInfo"><IconInfo size="lg" /></Tooltip>
    <Tooltip text="IconInspect" copy="IconInspect"><IconInspect size="lg" /></Tooltip>
    <Tooltip text="IconInstagram" copy="IconInstagram"><IconInstagram size="lg" /></Tooltip>
    <Tooltip text="IconItalic" copy="IconItalic"><IconItalic size="lg" /></Tooltip>
    <Tooltip text="IconJapaneseYen" copy="IconJapaneseYen"><IconJapaneseYen size="lg" /></Tooltip>
    <Tooltip text="IconJoystick" copy="IconJoystick"><IconJoystick size="lg" /></Tooltip>
    <Tooltip text="IconKey" copy="IconKey"><IconKey size="lg" /></Tooltip>
    <Tooltip text="IconKeyboard" copy="IconKeyboard"><IconKeyboard size="lg" /></Tooltip>
    <Tooltip text="IconLamp" copy="IconLamp"><IconLamp size="lg" /></Tooltip>
    <Tooltip text="IconLampCeiling" copy="IconLampCeiling"><IconLampCeiling size="lg" /></Tooltip>
    <Tooltip text="IconLampDesk" copy="IconLampDesk"><IconLampDesk size="lg" /></Tooltip>
    <Tooltip text="IconLampFloor" copy="IconLampFloor"><IconLampFloor size="lg" /></Tooltip>
    <Tooltip text="IconLampWallDown" copy="IconLampWallDown"><IconLampWallDown size="lg" /></Tooltip>
    <Tooltip text="IconLampWallUp" copy="IconLampWallUp"><IconLampWallUp size="lg" /></Tooltip>
    <Tooltip text="IconLandmark" copy="IconLandmark"><IconLandmark size="lg" /></Tooltip>
    <Tooltip text="IconLanguages" copy="IconLanguages"><IconLanguages size="lg" /></Tooltip>
    <Tooltip text="IconLaptop" copy="IconLaptop"><IconLaptop size="lg" /></Tooltip>
    <Tooltip text="IconLaptop2" copy="IconLaptop2"><IconLaptop2 size="lg" /></Tooltip>
    <Tooltip text="IconLasso" copy="IconLasso"><IconLasso size="lg" /></Tooltip>
    <Tooltip text="IconLassoSelect" copy="IconLassoSelect"><IconLassoSelect size="lg" /></Tooltip>
    <Tooltip text="IconLaugh" copy="IconLaugh"><IconLaugh size="lg" /></Tooltip>
    <Tooltip text="IconLayers" copy="IconLayers"><IconLayers size="lg" /></Tooltip>
    <Tooltip text="IconLayout" copy="IconLayout"><IconLayout size="lg" /></Tooltip>
    <Tooltip text="IconLayoutDashboard" copy="IconLayoutDashboard"><IconLayoutDashboard size="lg" /></Tooltip>
    <Tooltip text="IconLayoutGrid" copy="IconLayoutGrid"><IconLayoutGrid size="lg" /></Tooltip>
    <Tooltip text="IconLayoutList" copy="IconLayoutList"><IconLayoutList size="lg" /></Tooltip>
    <Tooltip text="IconLayoutTemplate" copy="IconLayoutTemplate"><IconLayoutTemplate size="lg" /></Tooltip>
    <Tooltip text="IconLeaf" copy="IconLeaf"><IconLeaf size="lg" /></Tooltip>
    <Tooltip text="IconLibrary" copy="IconLibrary"><IconLibrary size="lg" /></Tooltip>
    <Tooltip text="IconLifeBuoy" copy="IconLifeBuoy"><IconLifeBuoy size="lg" /></Tooltip>
    <Tooltip text="IconLightbulb" copy="IconLightbulb"><IconLightbulb size="lg" /></Tooltip>
    <Tooltip text="IconLightbulbOff" copy="IconLightbulbOff"><IconLightbulbOff size="lg" /></Tooltip>
    <Tooltip text="IconLineChart" copy="IconLineChart"><IconLineChart size="lg" /></Tooltip>
    <Tooltip text="IconLink" copy="IconLink"><IconLink size="lg" /></Tooltip>
    <Tooltip text="IconLink2" copy="IconLink2"><IconLink2 size="lg" /></Tooltip>
    <Tooltip text="IconLink2Off" copy="IconLink2Off"><IconLink2Off size="lg" /></Tooltip>
    <Tooltip text="IconLinkedin" copy="IconLinkedin"><IconLinkedin size="lg" /></Tooltip>
    <Tooltip text="IconList" copy="IconList"><IconList size="lg" /></Tooltip>
    <Tooltip text="IconListChecks" copy="IconListChecks"><IconListChecks size="lg" /></Tooltip>
    <Tooltip text="IconListEnd" copy="IconListEnd"><IconListEnd size="lg" /></Tooltip>
    <Tooltip text="IconListMinus" copy="IconListMinus"><IconListMinus size="lg" /></Tooltip>
    <Tooltip text="IconListMusic" copy="IconListMusic"><IconListMusic size="lg" /></Tooltip>
    <Tooltip text="IconListOrdered" copy="IconListOrdered"><IconListOrdered size="lg" /></Tooltip>
    <Tooltip text="IconListPlus" copy="IconListPlus"><IconListPlus size="lg" /></Tooltip>
    <Tooltip text="IconListStart" copy="IconListStart"><IconListStart size="lg" /></Tooltip>
    <Tooltip text="IconListVideo" copy="IconListVideo"><IconListVideo size="lg" /></Tooltip>
    <Tooltip text="IconListX" copy="IconListX"><IconListX size="lg" /></Tooltip>
    <Tooltip text="IconLoader" copy="IconLoader"><IconLoader size="lg" /></Tooltip>
    <Tooltip text="IconLoader2" copy="IconLoader2"><IconLoader2 size="lg" /></Tooltip>
    <Tooltip text="IconLocate" copy="IconLocate"><IconLocate size="lg" /></Tooltip>
    <Tooltip text="IconLocateFixed" copy="IconLocateFixed"><IconLocateFixed size="lg" /></Tooltip>
    <Tooltip text="IconLocateOff" copy="IconLocateOff"><IconLocateOff size="lg" /></Tooltip>
    <Tooltip text="IconLock" copy="IconLock"><IconLock size="lg" /></Tooltip>
    <Tooltip text="IconLogIn" copy="IconLogIn"><IconLogIn size="lg" /></Tooltip>
    <Tooltip text="IconLogOut" copy="IconLogOut"><IconLogOut size="lg" /></Tooltip>
    <Tooltip text="IconLuggage" copy="IconLuggage"><IconLuggage size="lg" /></Tooltip>
    <Tooltip text="IconMagnet" copy="IconMagnet"><IconMagnet size="lg" /></Tooltip>
    <Tooltip text="IconMail" copy="IconMail"><IconMail size="lg" /></Tooltip>
    <Tooltip text="IconMailCheck" copy="IconMailCheck"><IconMailCheck size="lg" /></Tooltip>
    <Tooltip text="IconMailMinus" copy="IconMailMinus"><IconMailMinus size="lg" /></Tooltip>
    <Tooltip text="IconMailOpen" copy="IconMailOpen"><IconMailOpen size="lg" /></Tooltip>
    <Tooltip text="IconMailPlus" copy="IconMailPlus"><IconMailPlus size="lg" /></Tooltip>
    <Tooltip text="IconMailQuestion" copy="IconMailQuestion"><IconMailQuestion size="lg" /></Tooltip>
    <Tooltip text="IconMails" copy="IconMails"><IconMails size="lg" /></Tooltip>
    <Tooltip text="IconMailSearch" copy="IconMailSearch"><IconMailSearch size="lg" /></Tooltip>
    <Tooltip text="IconMailWarning" copy="IconMailWarning"><IconMailWarning size="lg" /></Tooltip>
    <Tooltip text="IconMailX" copy="IconMailX"><IconMailX size="lg" /></Tooltip>
    <Tooltip text="IconMap" copy="IconMap"><IconMap size="lg" /></Tooltip>
    <Tooltip text="IconMapPin" copy="IconMapPin"><IconMapPin size="lg" /></Tooltip>
    <Tooltip text="IconMapPinOff" copy="IconMapPinOff"><IconMapPinOff size="lg" /></Tooltip>
    <Tooltip text="IconMartini" copy="IconMartini"><IconMartini size="lg" /></Tooltip>
    <Tooltip text="IconMaximize" copy="IconMaximize"><IconMaximize size="lg" /></Tooltip>
    <Tooltip text="IconMaximize2" copy="IconMaximize2"><IconMaximize2 size="lg" /></Tooltip>
    <Tooltip text="IconMedal" copy="IconMedal"><IconMedal size="lg" /></Tooltip>
    <Tooltip text="IconMegaphone" copy="IconMegaphone"><IconMegaphone size="lg" /></Tooltip>
    <Tooltip text="IconMegaphoneOff" copy="IconMegaphoneOff"><IconMegaphoneOff size="lg" /></Tooltip>
    <Tooltip text="IconMeh" copy="IconMeh"><IconMeh size="lg" /></Tooltip>
    <Tooltip text="IconMenu" copy="IconMenu"><IconMenu size="lg" /></Tooltip>
    <Tooltip text="IconMessageCircle" copy="IconMessageCircle"><IconMessageCircle size="lg" /></Tooltip>
    <Tooltip text="IconMessageSquare" copy="IconMessageSquare"><IconMessageSquare size="lg" /></Tooltip>
    <Tooltip text="IconMic" copy="IconMic"><IconMic size="lg" /></Tooltip>
    <Tooltip text="IconMic2" copy="IconMic2"><IconMic2 size="lg" /></Tooltip>
    <Tooltip text="IconMicOff" copy="IconMicOff"><IconMicOff size="lg" /></Tooltip>
    <Tooltip text="IconMicroscope" copy="IconMicroscope"><IconMicroscope size="lg" /></Tooltip>
    <Tooltip text="IconMicrowave" copy="IconMicrowave"><IconMicrowave size="lg" /></Tooltip>
    <Tooltip text="IconMilestone" copy="IconMilestone"><IconMilestone size="lg" /></Tooltip>
    <Tooltip text="IconMilk" copy="IconMilk"><IconMilk size="lg" /></Tooltip>
    <Tooltip text="IconMilkOff" copy="IconMilkOff"><IconMilkOff size="lg" /></Tooltip>
    <Tooltip text="IconMinimize" copy="IconMinimize"><IconMinimize size="lg" /></Tooltip>
    <Tooltip text="IconMinimize2" copy="IconMinimize2"><IconMinimize2 size="lg" /></Tooltip>
    <Tooltip text="IconMinus" copy="IconMinus"><IconMinus size="lg" /></Tooltip>
    <Tooltip text="IconMinusCircle" copy="IconMinusCircle"><IconMinusCircle size="lg" /></Tooltip>
    <Tooltip text="IconMinusSquare" copy="IconMinusSquare"><IconMinusSquare size="lg" /></Tooltip>
    <Tooltip text="IconMonitor" copy="IconMonitor"><IconMonitor size="lg" /></Tooltip>
    <Tooltip text="IconMonitorOff" copy="IconMonitorOff"><IconMonitorOff size="lg" /></Tooltip>
    <Tooltip text="IconMonitorSmartphone" copy="IconMonitorSmartphone"><IconMonitorSmartphone size="lg" /></Tooltip>
    <Tooltip text="IconMonitorSpeaker" copy="IconMonitorSpeaker"><IconMonitorSpeaker size="lg" /></Tooltip>
    <Tooltip text="IconMoon" copy="IconMoon"><IconMoon size="lg" /></Tooltip>
    <Tooltip text="IconMoreHorizontal" copy="IconMoreHorizontal"><IconMoreHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconMoreVertical" copy="IconMoreVertical"><IconMoreVertical size="lg" /></Tooltip>
    <Tooltip text="IconMountain" copy="IconMountain"><IconMountain size="lg" /></Tooltip>
    <Tooltip text="IconMountainSnow" copy="IconMountainSnow"><IconMountainSnow size="lg" /></Tooltip>
    <Tooltip text="IconMouse" copy="IconMouse"><IconMouse size="lg" /></Tooltip>
    <Tooltip text="IconMousePointer" copy="IconMousePointer"><IconMousePointer size="lg" /></Tooltip>
    <Tooltip text="IconMousePointer2" copy="IconMousePointer2"><IconMousePointer2 size="lg" /></Tooltip>
    <Tooltip text="IconMousePointerClick" copy="IconMousePointerClick"><IconMousePointerClick size="lg" /></Tooltip>
    <Tooltip text="IconMove" copy="IconMove"><IconMove size="lg" /></Tooltip>
    <Tooltip text="IconMove3D" copy="IconMove3D"><IconMove3D size="lg" /></Tooltip>
    <Tooltip text="IconMoveDiagonal" copy="IconMoveDiagonal"><IconMoveDiagonal size="lg" /></Tooltip>
    <Tooltip text="IconMoveDiagonal2" copy="IconMoveDiagonal2"><IconMoveDiagonal2 size="lg" /></Tooltip>
    <Tooltip text="IconMoveHorizontal" copy="IconMoveHorizontal"><IconMoveHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconMoveVertical" copy="IconMoveVertical"><IconMoveVertical size="lg" /></Tooltip>
    <Tooltip text="IconMusic" copy="IconMusic"><IconMusic size="lg" /></Tooltip>
    <Tooltip text="IconMusic2" copy="IconMusic2"><IconMusic2 size="lg" /></Tooltip>
    <Tooltip text="IconMusic3" copy="IconMusic3"><IconMusic3 size="lg" /></Tooltip>
    <Tooltip text="IconMusic4" copy="IconMusic4"><IconMusic4 size="lg" /></Tooltip>
    <Tooltip text="IconNavigation" copy="IconNavigation"><IconNavigation size="lg" /></Tooltip>
    <Tooltip text="IconNavigation2" copy="IconNavigation2"><IconNavigation2 size="lg" /></Tooltip>
    <Tooltip text="IconNavigation2Off" copy="IconNavigation2Off"><IconNavigation2Off size="lg" /></Tooltip>
    <Tooltip text="IconNavigationOff" copy="IconNavigationOff"><IconNavigationOff size="lg" /></Tooltip>
    <Tooltip text="IconNetwork" copy="IconNetwork"><IconNetwork size="lg" /></Tooltip>
    <Tooltip text="IconNewspaper" copy="IconNewspaper"><IconNewspaper size="lg" /></Tooltip>
    <Tooltip text="IconNut" copy="IconNut"><IconNut size="lg" /></Tooltip>
    <Tooltip text="IconNutOff" copy="IconNutOff"><IconNutOff size="lg" /></Tooltip>
    <Tooltip text="IconOctagon" copy="IconOctagon"><IconOctagon size="lg" /></Tooltip>
    <Tooltip text="IconOption" copy="IconOption"><IconOption size="lg" /></Tooltip>
    <Tooltip text="IconOutdent" copy="IconOutdent"><IconOutdent size="lg" /></Tooltip>
    <Tooltip text="IconPackage" copy="IconPackage"><IconPackage size="lg" /></Tooltip>
    <Tooltip text="IconPackage2" copy="IconPackage2"><IconPackage2 size="lg" /></Tooltip>
    <Tooltip text="IconPackageCheck" copy="IconPackageCheck"><IconPackageCheck size="lg" /></Tooltip>
    <Tooltip text="IconPackageMinus" copy="IconPackageMinus"><IconPackageMinus size="lg" /></Tooltip>
    <Tooltip text="IconPackageOpen" copy="IconPackageOpen"><IconPackageOpen size="lg" /></Tooltip>
    <Tooltip text="IconPackagePlus" copy="IconPackagePlus"><IconPackagePlus size="lg" /></Tooltip>
    <Tooltip text="IconPackageSearch" copy="IconPackageSearch"><IconPackageSearch size="lg" /></Tooltip>
    <Tooltip text="IconPackageX" copy="IconPackageX"><IconPackageX size="lg" /></Tooltip>
    <Tooltip text="IconPaintbrush" copy="IconPaintbrush"><IconPaintbrush size="lg" /></Tooltip>
    <Tooltip text="IconPaintbrush2" copy="IconPaintbrush2"><IconPaintbrush2 size="lg" /></Tooltip>
    <Tooltip text="IconPaintBucket" copy="IconPaintBucket"><IconPaintBucket size="lg" /></Tooltip>
    <Tooltip text="IconPalette" copy="IconPalette"><IconPalette size="lg" /></Tooltip>
    <Tooltip text="IconPalmtree" copy="IconPalmtree"><IconPalmtree size="lg" /></Tooltip>
    <Tooltip text="IconPaperclip" copy="IconPaperclip"><IconPaperclip size="lg" /></Tooltip>
    <Tooltip text="IconPartyPopper" copy="IconPartyPopper"><IconPartyPopper size="lg" /></Tooltip>
    <Tooltip text="IconPause" copy="IconPause"><IconPause size="lg" /></Tooltip>
    <Tooltip text="IconPauseCircle" copy="IconPauseCircle"><IconPauseCircle size="lg" /></Tooltip>
    <Tooltip text="IconPauseOctagon" copy="IconPauseOctagon"><IconPauseOctagon size="lg" /></Tooltip>
    <Tooltip text="IconPencil" copy="IconPencil"><IconPencil size="lg" /></Tooltip>
    <Tooltip text="IconPenTool" copy="IconPenTool"><IconPenTool size="lg" /></Tooltip>
    <Tooltip text="IconPercent" copy="IconPercent"><IconPercent size="lg" /></Tooltip>
    <Tooltip text="IconPersonStanding" copy="IconPersonStanding"><IconPersonStanding size="lg" /></Tooltip>
    <Tooltip text="IconPhone" copy="IconPhone"><IconPhone size="lg" /></Tooltip>
    <Tooltip text="IconPhoneCall" copy="IconPhoneCall"><IconPhoneCall size="lg" /></Tooltip>
    <Tooltip text="IconPhoneForwarded" copy="IconPhoneForwarded"><IconPhoneForwarded size="lg" /></Tooltip>
    <Tooltip text="IconPhoneIncoming" copy="IconPhoneIncoming"><IconPhoneIncoming size="lg" /></Tooltip>
    <Tooltip text="IconPhoneMissed" copy="IconPhoneMissed"><IconPhoneMissed size="lg" /></Tooltip>
    <Tooltip text="IconPhoneOff" copy="IconPhoneOff"><IconPhoneOff size="lg" /></Tooltip>
    <Tooltip text="IconPhoneOutgoing" copy="IconPhoneOutgoing"><IconPhoneOutgoing size="lg" /></Tooltip>
    <Tooltip text="IconPieChart" copy="IconPieChart"><IconPieChart size="lg" /></Tooltip>
    <Tooltip text="IconPiggyBank" copy="IconPiggyBank"><IconPiggyBank size="lg" /></Tooltip>
    <Tooltip text="IconPilcrow" copy="IconPilcrow"><IconPilcrow size="lg" /></Tooltip>
    <Tooltip text="IconPin" copy="IconPin"><IconPin size="lg" /></Tooltip>
    <Tooltip text="IconPinOff" copy="IconPinOff"><IconPinOff size="lg" /></Tooltip>
    <Tooltip text="IconPipette" copy="IconPipette"><IconPipette size="lg" /></Tooltip>
    <Tooltip text="IconPizza" copy="IconPizza"><IconPizza size="lg" /></Tooltip>
    <Tooltip text="IconPlane" copy="IconPlane"><IconPlane size="lg" /></Tooltip>
    <Tooltip text="IconPlay" copy="IconPlay"><IconPlay size="lg" /></Tooltip>
    <Tooltip text="IconPlayCircle" copy="IconPlayCircle"><IconPlayCircle size="lg" /></Tooltip>
    <Tooltip text="IconPlug" copy="IconPlug"><IconPlug size="lg" /></Tooltip>
    <Tooltip text="IconPlug2" copy="IconPlug2"><IconPlug2 size="lg" /></Tooltip>
    <Tooltip text="IconPlugZap" copy="IconPlugZap"><IconPlugZap size="lg" /></Tooltip>
    <Tooltip text="IconPlus" copy="IconPlus"><IconPlus size="lg" /></Tooltip>
    <Tooltip text="IconPlusCircle" copy="IconPlusCircle"><IconPlusCircle size="lg" /></Tooltip>
    <Tooltip text="IconPlusSquare" copy="IconPlusSquare"><IconPlusSquare size="lg" /></Tooltip>
    <Tooltip text="IconPocket" copy="IconPocket"><IconPocket size="lg" /></Tooltip>
    <Tooltip text="IconPodcast" copy="IconPodcast"><IconPodcast size="lg" /></Tooltip>
    <Tooltip text="IconPointer" copy="IconPointer"><IconPointer size="lg" /></Tooltip>
    <Tooltip text="IconPoundSterling" copy="IconPoundSterling"><IconPoundSterling size="lg" /></Tooltip>
    <Tooltip text="IconPower" copy="IconPower"><IconPower size="lg" /></Tooltip>
    <Tooltip text="IconPowerOff" copy="IconPowerOff"><IconPowerOff size="lg" /></Tooltip>
    <Tooltip text="IconPrinter" copy="IconPrinter"><IconPrinter size="lg" /></Tooltip>
    <Tooltip text="IconPuzzle" copy="IconPuzzle"><IconPuzzle size="lg" /></Tooltip>
    <Tooltip text="IconQrCode" copy="IconQrCode"><IconQrCode size="lg" /></Tooltip>
    <Tooltip text="IconQuote" copy="IconQuote"><IconQuote size="lg" /></Tooltip>
    <Tooltip text="IconRadio" copy="IconRadio"><IconRadio size="lg" /></Tooltip>
    <Tooltip text="IconRadioReceiver" copy="IconRadioReceiver"><IconRadioReceiver size="lg" /></Tooltip>
    <Tooltip text="IconRectangleHorizontal" copy="IconRectangleHorizontal"><IconRectangleHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconRectangleVertical" copy="IconRectangleVertical"><IconRectangleVertical size="lg" /></Tooltip>
    <Tooltip text="IconRecycle" copy="IconRecycle"><IconRecycle size="lg" /></Tooltip>
    <Tooltip text="IconRedo" copy="IconRedo"><IconRedo size="lg" /></Tooltip>
    <Tooltip text="IconRedo2" copy="IconRedo2"><IconRedo2 size="lg" /></Tooltip>
    <Tooltip text="IconRefreshCcw" copy="IconRefreshCcw"><IconRefreshCcw size="lg" /></Tooltip>
    <Tooltip text="IconRefreshCw" copy="IconRefreshCw"><IconRefreshCw size="lg" /></Tooltip>
    <Tooltip text="IconRefrigerator" copy="IconRefrigerator"><IconRefrigerator size="lg" /></Tooltip>
    <Tooltip text="IconRegex" copy="IconRegex"><IconRegex size="lg" /></Tooltip>
    <Tooltip text="IconRepeat" copy="IconRepeat"><IconRepeat size="lg" /></Tooltip>
    <Tooltip text="IconRepeat1" copy="IconRepeat1"><IconRepeat1 size="lg" /></Tooltip>
    <Tooltip text="IconReply" copy="IconReply"><IconReply size="lg" /></Tooltip>
    <Tooltip text="IconReplyAll" copy="IconReplyAll"><IconReplyAll size="lg" /></Tooltip>
    <Tooltip text="IconRewind" copy="IconRewind"><IconRewind size="lg" /></Tooltip>
    <Tooltip text="IconRocket" copy="IconRocket"><IconRocket size="lg" /></Tooltip>
    <Tooltip text="IconRockingChair" copy="IconRockingChair"><IconRockingChair size="lg" /></Tooltip>
    <Tooltip text="IconRotate3D" copy="IconRotate3D"><IconRotate3D size="lg" /></Tooltip>
    <Tooltip text="IconRotateCcw" copy="IconRotateCcw"><IconRotateCcw size="lg" /></Tooltip>
    <Tooltip text="IconRotateCw" copy="IconRotateCw"><IconRotateCw size="lg" /></Tooltip>
    <Tooltip text="IconRss" copy="IconRss"><IconRss size="lg" /></Tooltip>
    <Tooltip text="IconRuler" copy="IconRuler"><IconRuler size="lg" /></Tooltip>
    <Tooltip text="IconRussianRuble" copy="IconRussianRuble"><IconRussianRuble size="lg" /></Tooltip>
    <Tooltip text="IconSailboat" copy="IconSailboat"><IconSailboat size="lg" /></Tooltip>
    <Tooltip text="IconSave" copy="IconSave"><IconSave size="lg" /></Tooltip>
    <Tooltip text="IconScale" copy="IconScale"><IconScale size="lg" /></Tooltip>
    <Tooltip text="IconScale3D" copy="IconScale3D"><IconScale3D size="lg" /></Tooltip>
    <Tooltip text="IconScaling" copy="IconScaling"><IconScaling size="lg" /></Tooltip>
    <Tooltip text="IconScan" copy="IconScan"><IconScan size="lg" /></Tooltip>
    <Tooltip text="IconScanFace" copy="IconScanFace"><IconScanFace size="lg" /></Tooltip>
    <Tooltip text="IconScanLine" copy="IconScanLine"><IconScanLine size="lg" /></Tooltip>
    <Tooltip text="IconScissors" copy="IconScissors"><IconScissors size="lg" /></Tooltip>
    <Tooltip text="IconScreenShare" copy="IconScreenShare"><IconScreenShare size="lg" /></Tooltip>
    <Tooltip text="IconScreenShareOff" copy="IconScreenShareOff"><IconScreenShareOff size="lg" /></Tooltip>
    <Tooltip text="IconScroll" copy="IconScroll"><IconScroll size="lg" /></Tooltip>
    <Tooltip text="IconSearch" copy="IconSearch"><IconSearch size="lg" /></Tooltip>
    <Tooltip text="IconSend" copy="IconSend"><IconSend size="lg" /></Tooltip>
    <Tooltip text="IconSeparatorHorizontal" copy="IconSeparatorHorizontal"><IconSeparatorHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconSeparatorVertical" copy="IconSeparatorVertical"><IconSeparatorVertical size="lg" /></Tooltip>
    <Tooltip text="IconServer" copy="IconServer"><IconServer size="lg" /></Tooltip>
    <Tooltip text="IconServerCog" copy="IconServerCog"><IconServerCog size="lg" /></Tooltip>
    <Tooltip text="IconServerCrash" copy="IconServerCrash"><IconServerCrash size="lg" /></Tooltip>
    <Tooltip text="IconServerOff" copy="IconServerOff"><IconServerOff size="lg" /></Tooltip>
    <Tooltip text="IconSettings" copy="IconSettings"><IconSettings size="lg" /></Tooltip>
    <Tooltip text="IconSettings2" copy="IconSettings2"><IconSettings2 size="lg" /></Tooltip>
    <Tooltip text="IconShare" copy="IconShare"><IconShare size="lg" /></Tooltip>
    <Tooltip text="IconShare2" copy="IconShare2"><IconShare2 size="lg" /></Tooltip>
    <Tooltip text="IconSheet" copy="IconSheet"><IconSheet size="lg" /></Tooltip>
    <Tooltip text="IconShield" copy="IconShield"><IconShield size="lg" /></Tooltip>
    <Tooltip text="IconShieldAlert" copy="IconShieldAlert"><IconShieldAlert size="lg" /></Tooltip>
    <Tooltip text="IconShieldCheck" copy="IconShieldCheck"><IconShieldCheck size="lg" /></Tooltip>
    <Tooltip text="IconShieldClose" copy="IconShieldClose"><IconShieldClose size="lg" /></Tooltip>
    <Tooltip text="IconShieldOff" copy="IconShieldOff"><IconShieldOff size="lg" /></Tooltip>
    <Tooltip text="IconShirt" copy="IconShirt"><IconShirt size="lg" /></Tooltip>
    <Tooltip text="IconShoppingBag" copy="IconShoppingBag"><IconShoppingBag size="lg" /></Tooltip>
    <Tooltip text="IconShoppingCart" copy="IconShoppingCart"><IconShoppingCart size="lg" /></Tooltip>
    <Tooltip text="IconShovel" copy="IconShovel"><IconShovel size="lg" /></Tooltip>
    <Tooltip text="IconShowerHead" copy="IconShowerHead"><IconShowerHead size="lg" /></Tooltip>
    <Tooltip text="IconShrink" copy="IconShrink"><IconShrink size="lg" /></Tooltip>
    <Tooltip text="IconShrub" copy="IconShrub"><IconShrub size="lg" /></Tooltip>
    <Tooltip text="IconShuffle" copy="IconShuffle"><IconShuffle size="lg" /></Tooltip>
    <Tooltip text="IconSidebar" copy="IconSidebar"><IconSidebar size="lg" /></Tooltip>
    <Tooltip text="IconSidebarClose" copy="IconSidebarClose"><IconSidebarClose size="lg" /></Tooltip>
    <Tooltip text="IconSidebarOpen" copy="IconSidebarOpen"><IconSidebarOpen size="lg" /></Tooltip>
    <Tooltip text="IconSigma" copy="IconSigma"><IconSigma size="lg" /></Tooltip>
    <Tooltip text="IconSignal" copy="IconSignal"><IconSignal size="lg" /></Tooltip>
    <Tooltip text="IconSignalHigh" copy="IconSignalHigh"><IconSignalHigh size="lg" /></Tooltip>
    <Tooltip text="IconSignalLow" copy="IconSignalLow"><IconSignalLow size="lg" /></Tooltip>
    <Tooltip text="IconSignalMedium" copy="IconSignalMedium"><IconSignalMedium size="lg" /></Tooltip>
    <Tooltip text="IconSignalZero" copy="IconSignalZero"><IconSignalZero size="lg" /></Tooltip>
    <Tooltip text="IconSiren" copy="IconSiren"><IconSiren size="lg" /></Tooltip>
    <Tooltip text="IconSkipBack" copy="IconSkipBack"><IconSkipBack size="lg" /></Tooltip>
    <Tooltip text="IconSkipForward" copy="IconSkipForward"><IconSkipForward size="lg" /></Tooltip>
    <Tooltip text="IconSkull" copy="IconSkull"><IconSkull size="lg" /></Tooltip>
    <Tooltip text="IconSlack" copy="IconSlack"><IconSlack size="lg" /></Tooltip>
    <Tooltip text="IconSlash" copy="IconSlash"><IconSlash size="lg" /></Tooltip>
    <Tooltip text="IconSlice" copy="IconSlice"><IconSlice size="lg" /></Tooltip>
    <Tooltip text="IconSliders" copy="IconSliders"><IconSliders size="lg" /></Tooltip>
    <Tooltip text="IconSlidersHorizontal" copy="IconSlidersHorizontal"><IconSlidersHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconSmartphone" copy="IconSmartphone"><IconSmartphone size="lg" /></Tooltip>
    <Tooltip text="IconSmartphoneCharging" copy="IconSmartphoneCharging"><IconSmartphoneCharging size="lg" /></Tooltip>
    <Tooltip text="IconSmile" copy="IconSmile"><IconSmile size="lg" /></Tooltip>
    <Tooltip text="IconSmilePlus" copy="IconSmilePlus"><IconSmilePlus size="lg" /></Tooltip>
    <Tooltip text="IconSnowflake" copy="IconSnowflake"><IconSnowflake size="lg" /></Tooltip>
    <Tooltip text="IconSofa" copy="IconSofa"><IconSofa size="lg" /></Tooltip>
    <Tooltip text="IconSortAsc" copy="IconSortAsc"><IconSortAsc size="lg" /></Tooltip>
    <Tooltip text="IconSortDesc" copy="IconSortDesc"><IconSortDesc size="lg" /></Tooltip>
    <Tooltip text="IconSpeaker" copy="IconSpeaker"><IconSpeaker size="lg" /></Tooltip>
    <Tooltip text="IconSpline" copy="IconSpline"><IconSpline size="lg" /></Tooltip>
    <Tooltip text="IconSprout" copy="IconSprout"><IconSprout size="lg" /></Tooltip>
    <Tooltip text="IconSquare" copy="IconSquare"><IconSquare size="lg" /></Tooltip>
    <Tooltip text="IconStar" copy="IconStar"><IconStar size="lg" /></Tooltip>
    <Tooltip text="IconStarHalf" copy="IconStarHalf"><IconStarHalf size="lg" /></Tooltip>
    <Tooltip text="IconStarOff" copy="IconStarOff"><IconStarOff size="lg" /></Tooltip>
    <Tooltip text="IconStethoscope" copy="IconStethoscope"><IconStethoscope size="lg" /></Tooltip>
    <Tooltip text="IconSticker" copy="IconSticker"><IconSticker size="lg" /></Tooltip>
    <Tooltip text="IconStickyNote" copy="IconStickyNote"><IconStickyNote size="lg" /></Tooltip>
    <Tooltip text="IconStopCircle" copy="IconStopCircle"><IconStopCircle size="lg" /></Tooltip>
    <Tooltip text="IconStretchHorizontal" copy="IconStretchHorizontal"><IconStretchHorizontal size="lg" /></Tooltip>
    <Tooltip text="IconStretchVertical" copy="IconStretchVertical"><IconStretchVertical size="lg" /></Tooltip>
    <Tooltip text="IconStrikethrough" copy="IconStrikethrough"><IconStrikethrough size="lg" /></Tooltip>
    <Tooltip text="IconSubscript" copy="IconSubscript"><IconSubscript size="lg" /></Tooltip>
    <Tooltip text="IconSubtitles" copy="IconSubtitles"><IconSubtitles size="lg" /></Tooltip>
    <Tooltip text="IconSun" copy="IconSun"><IconSun size="lg" /></Tooltip>
    <Tooltip text="IconSunDim" copy="IconSunDim"><IconSunDim size="lg" /></Tooltip>
    <Tooltip text="IconSunMedium" copy="IconSunMedium"><IconSunMedium size="lg" /></Tooltip>
    <Tooltip text="IconSunMoon" copy="IconSunMoon"><IconSunMoon size="lg" /></Tooltip>
    <Tooltip text="IconSunrise" copy="IconSunrise"><IconSunrise size="lg" /></Tooltip>
    <Tooltip text="IconSunset" copy="IconSunset"><IconSunset size="lg" /></Tooltip>
    <Tooltip text="IconSunSnow" copy="IconSunSnow"><IconSunSnow size="lg" /></Tooltip>
    <Tooltip text="IconSuperscript" copy="IconSuperscript"><IconSuperscript size="lg" /></Tooltip>
    <Tooltip text="IconSwissFranc" copy="IconSwissFranc"><IconSwissFranc size="lg" /></Tooltip>
    <Tooltip text="IconSwitchCamera" copy="IconSwitchCamera"><IconSwitchCamera size="lg" /></Tooltip>
    <Tooltip text="IconSword" copy="IconSword"><IconSword size="lg" /></Tooltip>
    <Tooltip text="IconSwords" copy="IconSwords"><IconSwords size="lg" /></Tooltip>
    <Tooltip text="IconSyringe" copy="IconSyringe"><IconSyringe size="lg" /></Tooltip>
    <Tooltip text="IconTable" copy="IconTable"><IconTable size="lg" /></Tooltip>
    <Tooltip text="IconTable2" copy="IconTable2"><IconTable2 size="lg" /></Tooltip>
    <Tooltip text="IconTablet" copy="IconTablet"><IconTablet size="lg" /></Tooltip>
    <Tooltip text="IconTag" copy="IconTag"><IconTag size="lg" /></Tooltip>
    <Tooltip text="IconTags" copy="IconTags"><IconTags size="lg" /></Tooltip>
    <Tooltip text="IconTarget" copy="IconTarget"><IconTarget size="lg" /></Tooltip>
    <Tooltip text="IconTent" copy="IconTent"><IconTent size="lg" /></Tooltip>
    <Tooltip text="IconTerminal" copy="IconTerminal"><IconTerminal size="lg" /></Tooltip>
    <Tooltip text="IconTerminalSquare" copy="IconTerminalSquare"><IconTerminalSquare size="lg" /></Tooltip>
    <Tooltip text="IconTextCursor" copy="IconTextCursor"><IconTextCursor size="lg" /></Tooltip>
    <Tooltip text="IconTextCursorInput" copy="IconTextCursorInput"><IconTextCursorInput size="lg" /></Tooltip>
    <Tooltip text="IconThermometer" copy="IconThermometer"><IconThermometer size="lg" /></Tooltip>
    <Tooltip text="IconThermometerSnowflake" copy="IconThermometerSnowflake"><IconThermometerSnowflake size="lg" /></Tooltip>
    <Tooltip text="IconThermometerSun" copy="IconThermometerSun"><IconThermometerSun size="lg" /></Tooltip>
    <Tooltip text="IconThumbsDown" copy="IconThumbsDown"><IconThumbsDown size="lg" /></Tooltip>
    <Tooltip text="IconThumbsUp" copy="IconThumbsUp"><IconThumbsUp size="lg" /></Tooltip>
    <Tooltip text="IconTicket" copy="IconTicket"><IconTicket size="lg" /></Tooltip>
    <Tooltip text="IconTimer" copy="IconTimer"><IconTimer size="lg" /></Tooltip>
    <Tooltip text="IconTimerOff" copy="IconTimerOff"><IconTimerOff size="lg" /></Tooltip>
    <Tooltip text="IconTimerReset" copy="IconTimerReset"><IconTimerReset size="lg" /></Tooltip>
    <Tooltip text="IconToggleLeft" copy="IconToggleLeft"><IconToggleLeft size="lg" /></Tooltip>
    <Tooltip text="IconToggleRight" copy="IconToggleRight"><IconToggleRight size="lg" /></Tooltip>
    <Tooltip text="IconTornado" copy="IconTornado"><IconTornado size="lg" /></Tooltip>
    <Tooltip text="IconToyBrick" copy="IconToyBrick"><IconToyBrick size="lg" /></Tooltip>
    <Tooltip text="IconTrain" copy="IconTrain"><IconTrain size="lg" /></Tooltip>
    <Tooltip text="IconTrash" copy="IconTrash"><IconTrash size="lg" /></Tooltip>
    <Tooltip text="IconTrash2" copy="IconTrash2"><IconTrash2 size="lg" /></Tooltip>
    <Tooltip text="IconTreeDeciduous" copy="IconTreeDeciduous"><IconTreeDeciduous size="lg" /></Tooltip>
    <Tooltip text="IconTreePine" copy="IconTreePine"><IconTreePine size="lg" /></Tooltip>
    <Tooltip text="IconTrees" copy="IconTrees"><IconTrees size="lg" /></Tooltip>
    <Tooltip text="IconTrello" copy="IconTrello"><IconTrello size="lg" /></Tooltip>
    <Tooltip text="IconTrendingDown" copy="IconTrendingDown"><IconTrendingDown size="lg" /></Tooltip>
    <Tooltip text="IconTrendingUp" copy="IconTrendingUp"><IconTrendingUp size="lg" /></Tooltip>
    <Tooltip text="IconTriangle" copy="IconTriangle"><IconTriangle size="lg" /></Tooltip>
    <Tooltip text="IconTrophy" copy="IconTrophy"><IconTrophy size="lg" /></Tooltip>
    <Tooltip text="IconTruck" copy="IconTruck"><IconTruck size="lg" /></Tooltip>
    <Tooltip text="IconTv" copy="IconTv"><IconTv size="lg" /></Tooltip>
    <Tooltip text="IconTv2" copy="IconTv2"><IconTv2 size="lg" /></Tooltip>
    <Tooltip text="IconTwitch" copy="IconTwitch"><IconTwitch size="lg" /></Tooltip>
    <Tooltip text="IconTwitter" copy="IconTwitter"><IconTwitter size="lg" /></Tooltip>
    <Tooltip text="IconType" copy="IconType"><IconType size="lg" /></Tooltip>
    <Tooltip text="IconUmbrella" copy="IconUmbrella"><IconUmbrella size="lg" /></Tooltip>
    <Tooltip text="IconUnderline" copy="IconUnderline"><IconUnderline size="lg" /></Tooltip>
    <Tooltip text="IconUndo" copy="IconUndo"><IconUndo size="lg" /></Tooltip>
    <Tooltip text="IconUndo2" copy="IconUndo2"><IconUndo2 size="lg" /></Tooltip>
    <Tooltip text="IconUnlink" copy="IconUnlink"><IconUnlink size="lg" /></Tooltip>
    <Tooltip text="IconUnlink2" copy="IconUnlink2"><IconUnlink2 size="lg" /></Tooltip>
    <Tooltip text="IconUnlock" copy="IconUnlock"><IconUnlock size="lg" /></Tooltip>
    <Tooltip text="IconUpload" copy="IconUpload"><IconUpload size="lg" /></Tooltip>
    <Tooltip text="IconUploadCloud" copy="IconUploadCloud"><IconUploadCloud size="lg" /></Tooltip>
    <Tooltip text="IconUsb" copy="IconUsb"><IconUsb size="lg" /></Tooltip>
    <Tooltip text="IconUser" copy="IconUser"><IconUser size="lg" /></Tooltip>
    <Tooltip text="IconUserCheck" copy="IconUserCheck"><IconUserCheck size="lg" /></Tooltip>
    <Tooltip text="IconUserCog" copy="IconUserCog"><IconUserCog size="lg" /></Tooltip>
    <Tooltip text="IconUserMinus" copy="IconUserMinus"><IconUserMinus size="lg" /></Tooltip>
    <Tooltip text="IconUserPlus" copy="IconUserPlus"><IconUserPlus size="lg" /></Tooltip>
    <Tooltip text="IconUsers" copy="IconUsers"><IconUsers size="lg" /></Tooltip>
    <Tooltip text="IconUserX" copy="IconUserX"><IconUserX size="lg" /></Tooltip>
    <Tooltip text="IconUtensils" copy="IconUtensils"><IconUtensils size="lg" /></Tooltip>
    <Tooltip text="IconUtensilsCrossed" copy="IconUtensilsCrossed"><IconUtensilsCrossed size="lg" /></Tooltip>
    <Tooltip text="IconVegan" copy="IconVegan"><IconVegan size="lg" /></Tooltip>
    <Tooltip text="IconVenetianMask" copy="IconVenetianMask"><IconVenetianMask size="lg" /></Tooltip>
    <Tooltip text="IconVerified" copy="IconVerified"><IconVerified size="lg" /></Tooltip>
    <Tooltip text="IconVibrate" copy="IconVibrate"><IconVibrate size="lg" /></Tooltip>
    <Tooltip text="IconVibrateOff" copy="IconVibrateOff"><IconVibrateOff size="lg" /></Tooltip>
    <Tooltip text="IconVideo" copy="IconVideo"><IconVideo size="lg" /></Tooltip>
    <Tooltip text="IconVideoOff" copy="IconVideoOff"><IconVideoOff size="lg" /></Tooltip>
    <Tooltip text="IconView" copy="IconView"><IconView size="lg" /></Tooltip>
    <Tooltip text="IconVoicemail" copy="IconVoicemail"><IconVoicemail size="lg" /></Tooltip>
    <Tooltip text="IconVolume" copy="IconVolume"><IconVolume size="lg" /></Tooltip>
    <Tooltip text="IconVolume1" copy="IconVolume1"><IconVolume1 size="lg" /></Tooltip>
    <Tooltip text="IconVolume2" copy="IconVolume2"><IconVolume2 size="lg" /></Tooltip>
    <Tooltip text="IconVolumeX" copy="IconVolumeX"><IconVolumeX size="lg" /></Tooltip>
    <Tooltip text="IconWallet" copy="IconWallet"><IconWallet size="lg" /></Tooltip>
    <Tooltip text="IconWand" copy="IconWand"><IconWand size="lg" /></Tooltip>
    <Tooltip text="IconWand2" copy="IconWand2"><IconWand2 size="lg" /></Tooltip>
    <Tooltip text="IconWatch" copy="IconWatch"><IconWatch size="lg" /></Tooltip>
    <Tooltip text="IconWaves" copy="IconWaves"><IconWaves size="lg" /></Tooltip>
    <Tooltip text="IconWebcam" copy="IconWebcam"><IconWebcam size="lg" /></Tooltip>
    <Tooltip text="IconWebhook" copy="IconWebhook"><IconWebhook size="lg" /></Tooltip>
    <Tooltip text="IconWheat" copy="IconWheat"><IconWheat size="lg" /></Tooltip>
    <Tooltip text="IconWheatOff" copy="IconWheatOff"><IconWheatOff size="lg" /></Tooltip>
    <Tooltip text="IconWifi" copy="IconWifi"><IconWifi size="lg" /></Tooltip>
    <Tooltip text="IconWifiOff" copy="IconWifiOff"><IconWifiOff size="lg" /></Tooltip>
    <Tooltip text="IconWind" copy="IconWind"><IconWind size="lg" /></Tooltip>
    <Tooltip text="IconWine" copy="IconWine"><IconWine size="lg" /></Tooltip>
    <Tooltip text="IconWineOff" copy="IconWineOff"><IconWineOff size="lg" /></Tooltip>
    <Tooltip text="IconWrapText" copy="IconWrapText"><IconWrapText size="lg" /></Tooltip>
    <Tooltip text="IconWrench" copy="IconWrench"><IconWrench size="lg" /></Tooltip>
    <Tooltip text="IconX" copy="IconX"><IconX size="lg" /></Tooltip>
    <Tooltip text="IconXCircle" copy="IconXCircle"><IconXCircle size="lg" /></Tooltip>
    <Tooltip text="IconXOctagon" copy="IconXOctagon"><IconXOctagon size="lg" /></Tooltip>
    <Tooltip text="IconXSquare" copy="IconXSquare"><IconXSquare size="lg" /></Tooltip>
    <Tooltip text="IconYoutube" copy="IconYoutube"><IconYoutube size="lg" /></Tooltip>
    <Tooltip text="IconZap" copy="IconZap"><IconZap size="lg" /></Tooltip>
    <Tooltip text="IconZapOff" copy="IconZapOff"><IconZapOff size="lg" /></Tooltip>
    <Tooltip text="IconZoomIn" copy="IconZoomIn"><IconZoomIn size="lg" /></Tooltip>
    <Tooltip text="IconZoomOut" copy="IconZoomOut"><IconZoomOut size="lg" /></Tooltip>
  </div>
</div>
