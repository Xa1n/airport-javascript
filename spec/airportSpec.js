describe("Airport", function() {

    var airport = new Airport();

    describe('Airport', function() {

        it('has an array', function() {
            expect(airport._hangar).toEqual([]);
        });

        it('can land a plane', function(){
            airport.land("plane");
            expect(airport._hangar).toEqual(["plane"]);
        });

    });

});