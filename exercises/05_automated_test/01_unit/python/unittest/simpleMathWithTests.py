
import unittest
from arithmetic import *

class TestArithmetic(unittest.TestCase):
    def testAdd(self):
        self.assertEqual(4, add(2, 2))

unittest.main()
