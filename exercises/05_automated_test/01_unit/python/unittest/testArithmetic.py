
# testArthmetic.py
import unittest
from arithmetic import *

class TestArithmetic(unittest.TestCase):
    def testAdd(self):
    self.assertEqual(4, arithmetic.add(2, 2))
    self.assertEqual(10, add(3, 7))
    self.assertEqual(90, add(-10, 100))
    
unittest.main() 
