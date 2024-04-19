// Execute the script when the DOM is fully loaded
$('document').ready(function () {
    // Initialize an empty object to store Amenity IDs and names
    let amenities = {};

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // If checked, add the Amenity ID and name to the amenities object
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            // If unchecked, remove the Amenity ID from the amenities object
            delete amenities[$(this).attr('data-id')];
        }

        // Update the text content of the h4 tag inside the div with class 'amenities'
        // with the list of Amenity names separated by commas
        $('.amenities h4').text(Object.values(amenities).join(', '));
    });
});
