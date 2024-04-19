document.ready(function () {
	const amenities = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			amenities[this.dataset.name] = this.dataset.id;
		} else {
			delete amenities[this.dataset.name];
		}
		$(".amenities h4").text(Object.keys(amenities).sort().join(", "));
	});


	const url = "http://0.0.0.0:5001/api/v1/status/";
    $.get(url, function (response) {
        if (response.status === 'OK') {
            $('div#api_status').addClass('available');
        } else {
            $('div#api_status').removeClass('available');
        }
    });

	const url = "http://0.0.0.0:5001/api/v1/places_search/";
	$.ajax({
		url: url,
		type: 'POST',
		data: JSON.stringify({}),
		headers: {
			"Content-Type": "application/json",
		},
		dataType: "json",
		data: '{}',
		success: (data) => { // Callback function for handling successful AJAX response
			data.forEach((place) => // Loop through each place object in the response data
				$("section.places").append( // Append HTML for each place to the section with class "places"
					`<article>
						<div class="title_box">
							<h2>${place.name}</h2> // Insert place name
							<div class="price_by_night">$${place.price_by_night}</div> // Insert place price per night
						</div>
						<div class="information">
							<div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? "s" : ""}</div> // Insert max number of guests
							<div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? "s" : ""}</div> // Insert number of bedrooms
							<div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? "s" : ""}</div> // Insert number of bathrooms
						</div>
						<div class="description">
							${place.description} // Insert place description
						</div>
					</article>`
				)
			);
		},

	});


});
