"use client";

// we cant use motion in ssr so we create a client side component and pass it to ssr
import { motion } from "framer-motion";

export const MotionDiv = motion.div;