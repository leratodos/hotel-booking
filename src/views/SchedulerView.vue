<template>
  <div ref="scheduler" class="scheduler">
    <div class="scheduler__wrapper-body">
      <div class="scheduler__aside">
        <div class="scheduler__aside-header">
        </div>
        <div v-for="el in data" class="scheduler__aside-row">
          <div class="user-info">
            <div class="avatar">
              <div  class="avatar-box"
                    :style="{
                  backgroundImage: `url(${
                    el.room.img || '/assets/vue.svg'
                  })`,
                }">
              </div>
            </div>
            <div>
              <span>{{  el.room.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="scheduler__main-block">
        <div class="scheduler__header">
<!--            <div-->
<!--                v-for="day in monthAllDays"-->
<!--                :key="day"-->
<!--                class="week-day"-->
<!--                :class="{ 'today': day.toISOString() === currentDay.toISOString() }, generateClassWithDayWeek(day) ? 'holiday' : 'workday'"-->
<!--            >-->
<!--              <h6>{{ getDayOfMonth(day) }}</h6>-->
<!--              <span>{{ getDayOfWeek(day) }}</span>-->
<!--            </div>-->
        </div>
<!--          <div v-for="el in data" :key="el.name" class="scheduler__main-row" :class="el.user">-->
<!--            <div v-for="(day, index) in monthAllDays" class="main-row-cell"-->
<!--                 :class="[-->
<!--                     generateClassWithDayWeek(day) ? 'holiday' : 'workday',-->
<!--                      { 'today': day?.toISOString() === currentDay.toISOString() }-->
<!--                   ]"-->
<!--                 :data-date="index + 1 + ' ' + formattedDate">-->
<!--              <div v-for="request in el.requests">-->
<!--                <div v-if="isDateInRange(request.start_date, request.end_date, day)" class="event-marker"-->
<!--                     :style="{ backgroundColor: getRequestAttributes(request.request_type).color}"-->
<!--                     :class="[-->
<!--                     request.request_type,-->
<!--                     isFirstDateInEvent(request.start_date, day) ? 'first-date' : '',-->
<!--                     isLastDateInEvent(request.end_date, day) ? 'last-date' : ''-->
<!--                   ]">-->
<!--                  <i :class="getRequestAttributes(request.request_type).icon"></i>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
      </div>
    </div>
  </div>
</template>
<script setup>
const data = [
  {
    room: {
      name: "Classic Single"
    },
    booking_schedule: [
      {
        guest: "Liam Huston",
        start_date: "2024-09-01T00:00:00",
        end_date: "2024-09-03T00:00:00",
      },
      {
        request_type: "Mandy Till",
        start_date: "2024-09-04T00:00:00",
        end_date: "2024-09-05T00:00:00",
      },
      {
        request_type: "Nora J",
        start_date: "2024-09-013T00:00:00",
        end_date: "2024-09-16T00:00:00",
      },
    ],
  },
  {
    room: {
      name: "Lux Double"
    },
    booking_schedule: [
      {
        guest: "Li Chang",
        start_date: "2024-09-06T00:00:00",
        end_date: "2024-09-07T00:00:00",
      },
      {
        request_type: "Bob Tailor",
        start_date: "2024-09-08T00:00:00",
        end_date: "2024-09-11T00:00:00",
      },
    ],
  },
];
</script>