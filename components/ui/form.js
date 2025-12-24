
import React from 'react';
export const Form = React.forwardRef((props, ref) => <form ref={ref} {...props} />);
export const FormItem = (props) => <div {...props} />;
export const FormControl = (props) => <div {...props} />;
export const FormDescription = (props) => <p className="text-sm text-gray-500" {...props} />;
export const FormMessage = (props) => <p className="text-sm font-medium text-red-500" {...props} />;
