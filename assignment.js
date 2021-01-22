// https://github.com/shamsuddin-developer/js-first-assignment

// Kilometer to Meter Conversion

function kilometerToMeter(km) {
  if (km < 0) {
    return "Error: You inserted an unexpected value for Kilometer";
  } else {
    var meter = km * 1000;
    return meter;
  }
}

// Calculate total cost for accessories

function budgetCalculator(watch, mobile, laptop) {
  if (watch < 0 || mobile < 0 || laptop < 0) {
    return "Error: You inserted an unexpected quantity for accessories";
  } else {
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
  }
}

// Calculate total hotel cost

function hotelCost(days) {
  if (days < 0) {
    return "Error: You inserted an unexpected day value";
  } else {
    var totalHotelCost = 0;
    if (days <= 10) {
      totalHotelCost = days * 100;
    } else if (days <= 20) {
      var firstTenDaysCost = 10 * 100;
      var remainingDays = days - 10;
      var afterTenDaysCost = remainingDays * 80;
      totalHotelCost = firstTenDaysCost + afterTenDaysCost;
    } else {
      var firstTenDaysCost = 10 * 100;
      var afterTenDaysCost = 10 * 80;
      var remainingDays = days - 20;
      var afterTwentyDaysCost = remainingDays * 50;
      totalHotelCost =
        firstTenDaysCost + afterTenDaysCost + afterTwentyDaysCost;
    }
    return totalHotelCost;
  }
}

// Find max element of array

function megaFriend(friends) {
  var maxName = friends[0];
  for (var x = 1; x < friends.length; x++) {
    var element = friends[x];
    if (element.length > maxName.length) {
      maxName = element;
    }
  }
  return maxName;
}
