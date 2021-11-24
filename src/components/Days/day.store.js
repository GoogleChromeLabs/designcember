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
// spoof a day of the month by setting todaysDate to a number

const Today = new Date()
const daysInMonth = 31
const todaysDate = Today.getDate()
const Days = {}

for (var i = 1; i <= daysInMonth; i++) {
  Days[`day${i}`] = i <= todaysDate
    ? 'active'
    : 'pending'
}

export default Days
