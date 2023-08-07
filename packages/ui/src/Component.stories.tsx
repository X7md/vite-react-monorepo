import './App.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {Component} from './index';
import type { Story } from "@ladle/react";

export const Button: Story = () => <Component className='text-green-400'>Test</Component>;
Button.storyName = "Component";


