/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https: *www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// this runs at build time
// this is not shipped to the client
// spoof a day of the month by setting todaysDate to a particular date

const calendarStart = new Date("2021-12-01");
const day = 1000 * 60 * 60 * 24;
const todaysDate = new Date();
const currentDaySinceStart = Math.floor((todaysDate - calendarStart) / day) + 1;
const daysInMonth = 31;
const daysToShow = Math.max(1, Math.min(daysInMonth, currentDaySinceStart));
const days = Object.fromEntries(
  Array.from({ length: daysInMonth }, (_, i) => [
    `day${i + 1}`,
    i + 1 > daysToShow ? "pending" : "active",
  ])
);

export default days;
