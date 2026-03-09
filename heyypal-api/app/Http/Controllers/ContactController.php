<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        $data = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'subject' => $validated['subject'],
            'msg' => $validated['message'],
        ];

        try {
            Mail::send([], [], function ($message) use ($data) {
                $message->to('indsoft24@gmail.com')
                    ->subject('HeyyPal Contact: ' . $data['subject'] . ' from ' . $data['name'])
                    ->replyTo($data['email'])
                    ->html("
                        <h3>New Contact Form Submission</h3>
                        <p><strong>Name:</strong> {$data['name']}</p>
                        <p><strong>Email:</strong> {$data['email']}</p>
                        <p><strong>Subject:</strong> {$data['subject']}</p>
                        <p><strong>Message:</strong></p>
                        <p>" . nl2br($data['msg']) . "</p>
                    ");
            });

            return response()->json(['message' => 'Message sent successfully!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to send message.', 'error' => $e->getMessage()], 500);
        }
    }
}
