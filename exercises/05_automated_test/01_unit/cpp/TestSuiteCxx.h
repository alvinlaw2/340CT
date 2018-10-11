// TestSuiteCxx.h
// This file contains our Cxx Test Suite which is defining our tests for our code in Maths.cpp

#include <cxxtest/TestSuite.h>
#include "Maths.h"

class TestSuiteCxx : public CxxTest::TestSuite
{
public:
    void testAddition1(void)
    {
        Maths myObject;
        TS_ASSERT(myObject.add(1, 1) > 1);
        TS_ASSERT_EQUALS(myObject.add(1, 1), 2);
    }

    void testAddition2(void)
    {
        Maths myObject;
        TS_TRACE("Starting addition2 test");
        TS_ASSERT_EQUALS(myObject.add(2, 2), 5); // this will fail our test because our test has errors
        TS_TRACE("Finishing addition2 test");
    }
};
