/* Generated file, do not edit */

#ifndef CXXTEST_RUNNING
#define CXXTEST_RUNNING
#endif

#define _CXXTEST_HAVE_STD
#include <cxxtest/TestListener.h>
#include <cxxtest/TestTracker.h>
#include <cxxtest/TestRunner.h>
#include <cxxtest/RealDescriptions.h>
#include <cxxtest/TestMain.h>
#include <cxxtest/ErrorPrinter.h>

int main( int argc, char *argv[] ) {
 int status;
    CxxTest::ErrorPrinter tmp;
    CxxTest::RealWorldDescription::_worldName = "cxxtest";
    status = CxxTest::Main< CxxTest::ErrorPrinter >( tmp, argc, argv );
    return status;
}
bool suite_TestSuiteCxx_init = false;
#include "TestSuiteCxx.h"

static TestSuiteCxx suite_TestSuiteCxx;

static CxxTest::List Tests_TestSuiteCxx = { 0, 0 };
CxxTest::StaticSuiteDescription suiteDescription_TestSuiteCxx( "TestSuiteCxx.h", 7, "TestSuiteCxx", suite_TestSuiteCxx, Tests_TestSuiteCxx );

static class TestDescription_suite_TestSuiteCxx_testAddition1 : public CxxTest::RealTestDescription {
public:
 TestDescription_suite_TestSuiteCxx_testAddition1() : CxxTest::RealTestDescription( Tests_TestSuiteCxx, suiteDescription_TestSuiteCxx, 10, "testAddition1" ) {}
 void runTest() { suite_TestSuiteCxx.testAddition1(); }
} testDescription_suite_TestSuiteCxx_testAddition1;

static class TestDescription_suite_TestSuiteCxx_testAddition2 : public CxxTest::RealTestDescription {
public:
 TestDescription_suite_TestSuiteCxx_testAddition2() : CxxTest::RealTestDescription( Tests_TestSuiteCxx, suiteDescription_TestSuiteCxx, 17, "testAddition2" ) {}
 void runTest() { suite_TestSuiteCxx.testAddition2(); }
} testDescription_suite_TestSuiteCxx_testAddition2;

#include <cxxtest/Root.cpp>
const char* CxxTest::RealWorldDescription::_worldName = "cxxtest";
