import styled from "styled-components";
import { bgSidebarDesktop } from "../assets/images/url-encoded";

export const SidebarStyle = styled.div`
  background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='none' viewBox='0 0 274 568' %3E%3Crect width='274' height='568' fill='%23483EFF' rx='10' /%3E%3Cmask id='a' width='274' height='568' x='0' y='0' maskUnits='userSpaceOnUse' style='mask-type:alpha' %3E%3Crect width='274' height='568' fill='%23fff' rx='10' /%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Cpath fill='%236259FF' fill-rule='evenodd' d='M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z' clip-rule='evenodd' /%3E%3Cpath fill='%23F9818E' fill-rule='evenodd' d='M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z' clip-rule='evenodd' /%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='bevel' stroke-width='5' d='m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798' /%3E%3Cpath fill='%23FFAF7E' d='M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z' /%3E%3C/g%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1em;
  width: 50%;

  display: flex;
  flex-direction: column;
  padding: 1em;
`;
