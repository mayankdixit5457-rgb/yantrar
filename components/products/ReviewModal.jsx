"use client";

import { useState } from "react";
import { Star, X } from "lucide-react";
import "./ReviewModal.css";

export default function ReviewModal({
	isOpen,
	onClose,
	productSlug,
}) {
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [comment, setComment] = useState("");
	const [rating, setRating] = useState(5);
	const [loading, setLoading] = useState(false);

	if (!isOpen) return null;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!name.trim() ||
			!title.trim() ||
			!comment.trim()
		)
			return;

		try {
			setLoading(true);

			const res = await fetch(
				`/api/products/${productSlug}/review`,
				{
					method: "POST",
					headers: {
						"Content-Type":
							"application/json",
					},
					body: JSON.stringify({
						name,
						title,
						text: comment,
						rating,
					}),
				}
			);

			if (!res.ok) {
				alert("Failed to submit review");
				return;
			}

			setName("");
			setTitle("");
			setComment("");
			setRating(5);

			onClose();

			window.location.reload();

		} catch (error) {
			console.error(error);
			alert("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			className="review-modal-overlay"
			onClick={onClose}
		>
			<div
				className="review-modal"
				onClick={(e) =>
					e.stopPropagation()
				}
			>
				<button
					className="review-close-btn"
					onClick={onClose}
				>
					<X size={18} />
				</button>

				<div className="review-modal-header">
					<h2>Write a Review</h2>
					<p>
						Share your experience with this
						product
					</p>
				</div>

				<form onSubmit={handleSubmit}>

					<div className="review-rating-block">
						<label>Your Rating</label>

						<div className="review-stars">
							{[1, 2, 3, 4, 5].map(
								(star) => (
									<button
										type="button"
										key={star}
										className="star-btn"
										onClick={() =>
											setRating(star)
										}
									>
										<Star
											size={26}
											fill={
												star <= rating
													? "#ffc107"
													: "transparent"
											}
											stroke="#ffc107"
										/>
									</button>
								)
							)}
						</div>
					</div>

					<div className="review-field">
						<label>Your Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) =>
								setName(
									e.target.value
								)
							}
							placeholder="Enter your name"
						/>
					</div>

					<div className="review-field">
						<label>Review Title</label>
						<input
							type="text"
							value={title}
							onChange={(e) =>
								setTitle(
									e.target.value
								)
							}
							placeholder="Short summary"
						/>
					</div>

					<div className="review-field">
						<label>Your Review</label>
						<textarea
							rows="5"
							value={comment}
							onChange={(e) =>
								setComment(
									e.target.value
								)
							}
							placeholder="Tell us about your experience..."
						/>
					</div>

					<button
						type="submit"
						className="review-submit-btn"
						disabled={loading}
					>
						{loading
							? "Submitting..."
							: "Submit Review"}
					</button>

				</form>
			</div>
		</div>
	);
}